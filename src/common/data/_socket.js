var EventEmitter = require('events').EventEmitter;

/**
 * Created by kyle-ssg on 16/03/15.
 */
var pusher = null;

if (typeof Pusher != "undefined") {
    if (Project.debug) {
        Pusher.log = log
    }


    var _data = require('./_data'),

        controller = _.assign({}, EventEmitter.prototype, {
            id: 'socket',
            clientId: null,
            userId: null,
            connected: false,
            connecting: false,
            channel: null,
            socket: null,
            queue: [],
            subscriptions: {},

            trigger: function (eventName, data) {
                //log(this.id, eventName || DEFAULT_CHANGE_EVENT, this);
                this.emit(eventName || DEFAULT_CHANGE_EVENT, data);
            },

            'onopen': function () {  //whenever we connect to pusher

                this.connected = true;
                this.connecting = false;
                this.trigger('connected');

                //subscribe to all of our subscriptions with pusher
                _.each(_.pluck(this.subscriptions, 'subscription'), this.postSubscription);

            },

            'onmessage': function (res) { //whenever we receive a push notification

                if (res.content) {
                    try { // request may be json, try to parse it
                        res.content = JSON.parse(res.content);
                    } catch (e) {
                    }
                }

                //todo: this could probably trigger subscriptionId +
                this.trigger(res.subscriptionId, res); //trigger an event with the subscription id

            },

            'onerror': function (res) { //whenever pusher detects an error

                this.connecting = false;
                this.error = true;

                this.reconnect();
                this.trigger('problem');

            },

            'onclose': function () { //whenever pusher disconnects

                this.connected = false;
                this.connecting = false;
                this.trigger('disconnected');

            },

            reconnect: function () { //reconnect to pusher

                setTimeout(function () {
                    this.connect(this.userId);
                }.bind(this), 500);

            },

            connect: function () { // attempt connection, if it fails simply go through the reconnect process

                if (this.connecting || this.connected) {
                    return;
                }

                this.connecting = true;
                this.clientId = Utils.GUID();

                pusher = new Pusher(Project.pusher.key);
                pusher.connection.bind('connected', this.onopen);
                pusher.connection.bind('failed', this.onerror);
            },

            subscription: function (subscriptionId, subscriptionType, params) { //returns a suitable subscription object to subscribe with

                params = params || {};

                return _.assign({}, {
                    subscriptionId: subscriptionId,
                    subscriptionType: subscriptionType
                }, params);

            },

            subscribe: function (subscriptions, store) {

                _.each(subscriptions, function (subscription) {

                    //check if subscription exists
                    var existingSubscription = this.subscriptions[subscription.subscriptionId + (subscription.subscriptionType || '')];

                    if (!existingSubscription) { //if no subscription is found for this id, create one with this id

                        subscription.channel = this.postSubscription(subscription);
                        existingSubscription = this.subscriptions[subscription.subscriptionId + (subscription.subscriptionType || '')] = {
                            subscription: subscription,
                            stores: {}
                        };

                    }

                    //store keep track that the store has subscribed
                    existingSubscription.stores[store] = true;

                }.bind(this));

            },

            postSubscription: function (subscription) { //subscribe with pusher and bind to success and onmessage

                var channel = null;

                if (this.connected) { //check we are connected before we subscribe

                    channel = pusher.subscribe(subscription.subscriptionType + subscription.subscriptionId);

                    //once subscribed we push a subscription event to our stores
                    channel.bind('pusher:subscription_succeeded', _.partial(this.trigger, 'subscribe-'
                        + subscription.subscriptionId, subscription.subscriptionId));

                    //call onmessage whenever we get a message from this subscription
                    channel.bind("message", this.onmessage, this);

                    return subscription;

                }

            },

            postUnsubscription: function (subscription) { //unsubscribe with pusher

                try {
                    pusher.unsubscribe(subscription.subscriptionType + subscription.subscriptionId);
                } catch (e) {
                }

                return subscription;

            },

            unsubscribe: function (subscriptions, store) { //unsubscribe store from pusher subscription

                if (this.connected) {

                    _.each(subscriptions, function (subscription) {
                        var existingSubscription = this.subscriptions[subscription.subscriptionId + (subscription.subscriptionType || '')];

                        if (existingSubscription) { //remove store from subscription
                            delete existingSubscription.stores[store];
                        }

                        if (!existingSubscription || !_.size(existingSubscription.stores)) {  //if no subscription is found for this id, unsubscribe
                            this.postUnsubscription(subscription);
                            delete this.subscriptions[subscription.subscriptionId + (subscription.subscriptionType || '')];
                        }

                    }.bind(this));

                }
            },

            get: function (url, data) { //get from channels api

                return _data.get(Project.api.channels + url, data).catch(function () {

                    setTimeout(function () { //keep trying
                        //todo: perhaps have a retry count
                        this.get(url, data);
                    }.bind(this), 200);

                }.bind(this));

            },

            post: function (url, data) { //post to channels api

                return _data.post(Project.api.channels + url, data).catch(function () {

                    setTimeout(function () {
                        //todo: perhaps have a retry count
                        this.post(url, data)
                    }.bind(this), 200);

                }.bind(this));

            }
        });

    _.bindAll(controller, 'onopen', 'postSubscription', 'onclose', 'onmessage', 'onerror', 'subscribe', 'unsubscribe', 'trigger');

    module.exports = controller;
}
else {
    module.exports = null;
}