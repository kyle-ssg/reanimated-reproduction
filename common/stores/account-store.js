import BaseStore from './base/_store';
import data from './base/_data';

const store = Object.assign({}, BaseStore, {
  id: 'account',
  getUser() {
    return store.model;
  },

});

const controller = {
  register: () => {
    store.saving();
    controller.onLogin({});
    store.saved();
  },
  setToken: (token) => {
    store.user = {};
    AsyncStorage.getItem('isDemo', (err, res) => {
      if (res) {
        store.isDemo = true;
      }
      data.setToken(token);
      return controller.onLogin();
    });
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
    store.onLogin(user);
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
      controller.setUser(null);
      break;
    case Actions.REGISTER:
      controller.register(action.details);
      break;
    case Actions.LOGIN:
      controller.login(action.details);
      break;
    default:
  }
});

controller.store = store;
module.exports = controller.store;
