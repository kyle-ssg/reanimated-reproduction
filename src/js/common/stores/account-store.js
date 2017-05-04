var BaseStore = require('./base/_store');
var data = require('../data/base/_data')

var controller = {
		onLogin: (user) => {
			if (!store.model && user) {
				store.model = user;
				store.loaded();
			} else {
				if (!user) {
					store.model = null;
					store.trigger(store.model ? 'logout' : 'no-user');
				}
			}
		},
		onLogout: () => {
			controller.onLogin(null);
		}
	},
	store = Object.assign({}, BaseStore, {
		id: 'account',
		getUser: function () {
			return store.model
		}
	});


firebase.initializeApp(Project.firebase);
FireAuth.init({
	fbAppId: Project.facebook.appId,
	apiKey: Project.firebase.apiKey,
	webClientId: Project.google.webClientId
});
FireAuth.setup(controller.onLogin, controller.onLogin, controller.onLogout, () => {
}, controller.onError)


store.dispatcherIndex = Dispatcher.register(store, function (payload) {
	var action = payload.action; // this is our action from handleViewAction

	switch (action.actionType) {
		case Actions.SET_USER:
			controller.onLogin(action.user);
			break;
		default:
			return;
	}
})
controller.store = store;
module.exports = controller.store;
