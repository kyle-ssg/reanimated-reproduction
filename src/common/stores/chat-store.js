var BaseStore = require('./_store'),
    _socket = require('../data/_socket');
window.liveURL = 'http://localhost:3000/';
window.navigator.userAgent = 'react-native';
var setId = false;
var io = require('./socket.io');

var GUID = function (append) {
    var d = new Date().getTime();
    var uuid = 'xxxx-xxxx-xxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

    return append ? uuid + '-' + append : uuid;
};

var controller = {

        report: function (data) {
            fetch(window.liveURL + `chat/${DeviceInfo.getBundleId()}/report`, {
                method: 'POST', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8'
                },
                // (required) Called when a remote or local notification is opened or received
                body: JSON.stringify(data)
            }).then(function () {
                alert("We will investigate this message and/or user within the next 24 hours");
            }).then(controller.loaded)
                .catch(function (res) {

                })
        },


        handleMessage: function (msg) {
            store.model.messages = store.model.messages.concat(msg);
            AsyncStorage.setItem("chat", JSON.stringify(store.model));
            store.changed()
        },

        handleHistory: function (messages) {
            store.model.messages = messages || [];
            store.changed()
        },

        block(id) {
            if (store.model.blocked[id]) {
                delete store.model.blocked[id];
            } else {
                store.model.blocked[id] = true;
            }
            setTimeout(() => {
                AsyncStorage.setItem("chat", JSON.stringify(store.model));
            }, 200);
            store.changed();
        },

        setChat: function (chat) {

            if (store.socket) {
                store.socket.disconnect()
                store.socket.removeAllListeners();
            }

            store.socket = io(window.liveURL, {
                query: 'roomId=' + chat,
                jsonp: false,
                transports: ['websocket']
            });
            store.socket.on('chat message', controller.handleMessage);
            store.socket.on('history', controller.handleHistory);
        },

        sendMessage: function (data) {
            if (store.socket && store.socket.emit) {
                store.socket.emit('chat message', {
                    message: data.message,
                    type: data.type,
                    uid: store.model.uid,
                    userId: AccountStore.getUserId(),
                    roomId: data.group._id,
                    roomName: data.group.name,
                    username: AccountStore.getUser().username
                });
            }
        }
    },
    store = _.assign({}, BaseStore, {
        id: 'chat',
        ratings: null,
        isBlocked: function (id) {
            return store.model && store.model.blocked && store.model.blocked[id]
        },
        dispatcherIndex: Dispatcher.register(this, function (payload) {
            var action = payload.action; // this is our action from handleViewAction

            switch (action.actionType) {
                case Actions.SEND_MESSAGE:
                    controller.sendMessage(action.message);
                    break;
                case Actions.REPORT:
                    controller.report(action.data);
                    return
                case Actions.BLOCK:
                    controller.block(action.id);
                    return
                    break;
                case Actions.SET_CHAT_NAME:
                    store.model.chatName = action.name;
                    AsyncStorage.setItem("chat", JSON.stringify(store.model));
                    break;
                default:
                    return;
            }
        })
    });


if (_socket && _socket.connect) {
    _socket.connect();
}

AsyncStorage.getItem("chat", function (err, val) {
    store.model = Object.assign({}, {
        uid: GUID(),
        blocked: {},
        chatName: 'Guest'
    }, val ? JSON.parse(val) : {});
    controller.setChat('lollipop')
});

controller.store = store;

module.exports = controller.store;