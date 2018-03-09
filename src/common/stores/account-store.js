var BaseStore = require('./_store'),
	_data = require('../data/base/_data');

var controller = {

		logout: function () {
			Utils.record("User", "logout");
			store.refreshToken = null;
			store.token = null;
			store.model = null;
			AsyncStorage.clear();
			store.trigger("logout");
			store.changed();
		},
		handleLogin: function (type, token) {
			store.loading();
			setTimeout(() => {
				store.model = {};
				AsyncStorage.setItem("user", "{}")
				store.loaded();
			}, 2000);
		}
	},
	store = _.assign({}, BaseStore, {
		id: 'account',
		model: null,
		rememberMe: true,

		getUser: function () {
			return this.model;
		},

		setUser: function (user) {
			_data.setToken(user.token);
			store.model = user;
			// controller.getWithToken(user.token)
		},

		dispatcherIndex: Dispatcher.register(this, function (payload) {
			var action = payload.action; // this is our action from handleViewAction

			switch (action.actionType) {
				case Actions.LOGOUT:
					controller.logout();
					break;
				case Actions.LOGIN:
					controller.handleLogin(action.type, action.token);
					break;
				default:
					return;
			}
		})
	});

controller.store = store;

module.exports = controller.store;
