import BaseStore from './base/_store';
import data from './base/_data';

const controller = {
        register: (data) => {
            store.saving();
            controller.onLogin({});
            store.saved();
        },
        setToken: (token) => {
            data.setToken(token);
        },
        login: (data) => {
            store.loading();
            controller.onLogin({});
            store.loaded();
        },

        onLogin(res) {
            store.model = res;
            controller.setToken(res && res.token);
        },


        setUser: function (user) {
            controller.onLogin(res);
            store.loaded();
        },

    },
    store = Object.assign({}, BaseStore, {
        id: 'account',
        getUser: function () {
            return store.model
        },

    });

store.dispatcherIndex = Dispatcher.register(store, function (payload) {
    var action = payload.action; // this is our action from handleViewAction

    switch (action.actionType) {
        case Actions.SET_USER:
            controller.setUser(action.user);
            break;
        case Actions.LOGOUT:
            controller.setUser(null);
            break;
        case Actions.REGISTER:
            controller.register(action.details);
            break;
        case Actions.LOGIN:
            controller.login(action.details);
            break;
        case Actions.SET_TOKEN:
            controller.setToken(action.token);
            break;
        default:
            return;
    }
});

controller.store = store;
module.exports = controller.store;
