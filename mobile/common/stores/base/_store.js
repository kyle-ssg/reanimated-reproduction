var EventEmitter = require('events').EventEmitter;
var sockets = require('../../data/base/_socket');
var DEFAULT_CHANGE_EVENT = "change",
    DEFAULT_LOADING_EVENT = "loading",
    DEFAULT_LOADED_EVENT = "loaded",
    DEFAULT_SAVED_EVENT = "saved",
    DEFAULT_SAVING_EVENT = "saving",
    DEFAULT_ERROR_EVENT = "problem";

module.exports = Object.assign({}, EventEmitter.prototype, {
    _maxListeners: Number.MAX_VALUE,
    id: "",
    isLoading: false,
    hasLoaded: false,
    isSaving: false,
    subscriptions: {},

    unsubscribe: function (subscriptionId, subscriptionType) {
        subscriptionId = subscriptionId || "";
        subscriptionType = subscriptionType || "";

        var key = subscriptionId + subscriptionType;

        if (!this.subscriptions[key]) {
            return;
        }

        sockets.off(key, this.subscriptions[key].cb);
        sockets.unsubscribe([this.subscriptions[key].subscription], this.id);
        delete(this.subscriptions[key]);
    },

    subscribe: function (subscriptionId, subscriptionType, callback) {
        subscriptionId = subscriptionId || "";
        subscriptionType = subscriptionType || "";
        var key = subscriptionId + subscriptionType,
            subscription;

        if (this.subscriptions[key]) {
            return;
        }
        subscription = sockets.subscription(subscriptionId, subscriptionType);
        this.subscriptions[key] = {cb: callback, subscription: subscription};

        sockets.subscribe([this.subscriptions[key].subscription], this.id);
        sockets.on(subscriptionId, callback);

    },

    trigger: function (eventName, data) {
        log(this.id, eventName || DEFAULT_CHANGE_EVENT, this);
        this.emit(eventName || DEFAULT_CHANGE_EVENT, data);
    },

    loading: function (callback) {
        this.hasLoaded = false;
        this.isLoading = true;
        this.trigger(DEFAULT_CHANGE_EVENT);
        this.trigger(DEFAULT_LOADING_EVENT);
    },

    saving: function (callback) {
        this.isSaving = true;
        this.trigger(DEFAULT_CHANGE_EVENT);
        this.trigger(DEFAULT_SAVING_EVENT);
    },

    loaded: function () {
        this.hasLoaded = true;
        this.isLoading = false;
        this.trigger(DEFAULT_LOADED_EVENT);
        this.trigger(DEFAULT_CHANGE_EVENT);
    },

    changed: function (data) {
        this.trigger(DEFAULT_CHANGE_EVENT);
    },

    saved: function (data) {
        this.isSaving = false;
        this.trigger(DEFAULT_SAVED_EVENT);
        this.trigger(DEFAULT_CHANGE_EVENT);
    },

    goneABitWest: function (data) {
        this.hasLoaded = true;
        this.isLoading = false;
        this.isSaving = false;
        this.trigger(DEFAULT_CHANGE_EVENT);
        this.trigger(DEFAULT_ERROR_EVENT)
    },

    on: function (eventName, callback) {
        this.addListener(eventName || DEFAULT_CHANGE_EVENT, callback)
    },

    off: function (eventName, callback) {
        this.removeListener(eventName || DEFAULT_CHANGE_EVENT, callback)
    }

});