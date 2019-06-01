import BaseStore from './base/_store';
import data from './base/_data';

const store = Object.assign({}, BaseStore, {
    id: 'account',
    getUser() {
        return store.model;
    },
    getUserId() {
        return store.model && store.model.id;
    },

});

const controller = {
    register: () => {
        store.saving();
        controller.onLogin({});
        store.saved();
    },
    setToken: (user) => {
        AsyncStorage.setItem('t', JSON.stringify(user));
        data.setToken(user && user.token);
        store.model = user && user.user;
        if (store.model && store.model.username && typeof FS !== 'undefined') {
            FS.identify(store.model.username);
        }
        store.loaded();
    },
    login: () => {
        store.loading();
        setTimeout(() => {
            controller.onLogin({});
        });
        store.loaded();
    },
    onLogin(res) {
        store.model = res;
        controller.setToken(res && res.token);
    },
    setUser(user) {
        controller.onLogin(user);
        store.loaded();
    },
};

store.dispatcherIndex = Dispatcher.register(store, (payload) => {
    const action = payload.action; // this is our action from handleViewAction

    switch (action.actionType) {
        case Actions.SET_USER:
            controller.setUser(action.user);
            break;
        case Actions.LOGOUT:
            AsyncStorage.removeItem('t');
            data.setToken(null);
            store.changed();
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
    }
});

controller.store = store;
module.exports = controller.store;
