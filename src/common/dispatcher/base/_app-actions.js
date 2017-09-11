import _ from 'lodash';
module.exports = {
    login: function (type, token) { //Login with an unused token
        Dispatcher.handleViewAction({
            actionType: Actions.LOGIN,
            token: token,
            type: type
        });
    },
    connected: function () { //when the device comes online
        Dispatcher.handleViewAction({
            actionType: Actions.CONNECTED,
        });
    },
    disconnected: function () { //when the device goes offline
        Dispatcher.handleViewAction({
            actionType: Actions.DISCONNECTED,
            //todo: maybe store last online
        });
    },
    active: function () { //when the device comes online
        Dispatcher.handleViewAction({
            actionType: Actions.ACTIVE,
        });
    },
    inactive: function () { //when the device goes offline
        Dispatcher.handleViewAction({
            actionType: Actions.INACTIVE,
            //todo: maybe store last online
        });
    },
    active: function (lastSession) { //When the device goes active
        Dispatcher.handleViewAction({
            actionType: Actions.ACTIVE,
            lastSession
        });
    },
    inactive: function () { //When the device goes inactive
        Dispatcher.handleViewAction({
            actionType: Actions.INACTIVE,
        });
    },
    setUser: function (type, user) { //Login with an unused token
        Dispatcher.handleViewAction({
            actionType: Actions.SET_USER,
            user
        });
    },
    logout: function () {
        Dispatcher.handleViewAction({ //Logout
            actionType: Actions.LOGOUT
        });
    },
    register: function (registration) { //register with an email and password {firstName, lastName, emailAddress1,2 + password1,2}
        Dispatcher.handleViewAction({
            actionType: Actions.REGISTER,
            registration: registration
        });
    },
    forgotPassword: function (emailAddress) { //process forgot password
        Dispatcher.handleViewAction({
            actionType: Actions.FORGOT_PASSWORD,
            emailAddress: emailAddress
        });
    },
    refresh: function () { //refresh the entire app
        Dispatcher.handleViewAction({
            actionType: Actions.REFRESH
        });
    },
//    Push
    setPushToken: function (token) {
        Dispatcher.handleViewAction({
            actionType: Actions.SET_PUSH_TOKEN,
            token,
        });
    },
//    Chat
    getChat: function (id) {
        Dispatcher.handleViewAction({
            actionType: Actions.GET_CHAT,
            id
        });
    },
    sendMessage: function (message, type, group) {
        Dispatcher.handleViewAction({
            actionType: Actions.SEND_MESSAGE,
            message: { message, type,group },
        });
    },
    setChatName: function (name) {
        Dispatcher.handleViewAction({
            actionType: Actions.SET_CHAT_NAME,
            name
        });
    },
    report: function (data) {
        Dispatcher.handleViewAction({
            actionType: Actions.REPORT,
            data
        });
    },
    block: function (id) {
        Dispatcher.handleViewAction({
            actionType: Actions.BLOCK,
            id
        });
    }
};