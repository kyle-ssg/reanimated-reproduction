var BaseStore = require('./_store');
var data = require('../data/base/_data')

var controller = {
		onLogin: (user) => {

			if (user) {
			} else {
				if(typeof Intercom != "undefined") {
					Intercom('shutdown')
				}
			}


			if (user && user.tempUser && (moment().valueOf() - moment(user.tempUser.ts).valueOf() > Constants.timeoutTempUser)) {
				delete user.tempUser;
			}
			if (!store.model && user) {
				store.model = user;
				AsyncStorage.setItem("user", JSON.stringify(store.model))

				store.loaded();
			} else if (user && user.temp && store.model) {
				store.model.tempUser = Object.assign({ts: user.ts || moment().toISOString()}, user);
			} else {
				if (!user && store.model) {
					if (store.model.temp) {
						delete store.model.tempUser;

					} else {
						AsyncStorage.setItem("user", null);
					}

					store.model = null;
					store.trigger('logout');
					data.delete(`${Project.authApi}`)
					data.setToken(null);
				}
			}
			if (store.model && AccountStore.isCoach()) {
				if (Project.intercom) {
					Intercom('boot', {
						app_id: Project.intercom,
						email: user.emailAddress,
						created_at: user.dateJoined,
						name: user.forename + " " + user.surname,
						user_id: user.username
					});
				} else if (Project.intercom) {
					Intercom('shutdown');
				}

				Utils.record(Constants.events.COACH_LOGIN)
			}
		},
		onLogout: () => {
			controller.onLogin(null);
		}
	},
	store = Object.assign({}, BaseStore, {
		id: 'account',
		isProAdmin: () => {
			return store.getUser() && store.getUser().proAdmin
		},
		hasPaypal: ()=> {
			const user = store.getUser();
			if (!user)
				return false;
			return user.paypalAPIUsername && user.paypalAPIPassword && user.paypalAPISignature;
		},
		isAdmin: () => {
			return store.getUser() && store.getUser().superuser
		},
		setUser: function (user) {
			if (user && user.tempUser && (moment().valueOf() - moment(user.tempUser.ts).valueOf() > Constants.timeoutTempUser)) {
				delete user.tempUser;
			}
			if (store.model && user && user.temp) {
				store.model.tempUser = Object.assign({ts: user.ts || moment().toISOString()}, user);
			} else {
				store.model = user;
			}

			if (user) {
				data.setToken(user.tempUser ? user.tempUser.token : user.token);
				AsyncStorage.setItem("user", JSON.stringify(store.model));

				if (user.id) {
					store.loaded();
					if (store.model && AccountStore.isCoach()) {
						if (Project.intercom) {
							Intercom('boot', {
								app_id: Project.intercom,
								email: user.emailAddress,
								created_at: user.dateJoined,
								name: user.forename + " " + user.surname,
								user_id: user.username
							});
						}
					} else if (Project.intercom) {
						Intercom('shutdown');
					}
				}

				if (store.model && AccountStore.isCoach()) {
					Utils.record(Constants.events.COACH_LOGIN)
				}

			} else {
				data.setToken(null);
			}
		},
		isTemp: function () {
			return store.getUser() && store.getUser().temp;
		},
		removeTemp: function () {
			delete store.model.tempUser
			data.setToken(store.model.token);
			AsyncStorage.setItem("user", JSON.stringify(store.model));
			return data.post(`${Project}`)
		},
		forceClient: function () {
			if (store.model.tempUser && !store.isCoach()) {
				return store.toggleClient()
			}
			return Promise.resolve();
		},
		toggleClient: function () {
			if (store.model.tempUser) {
				store.model.tempUser.clientContext = store.isCoach();
			} else {
				store.model.clientContext = store.isCoach();
			}
			return AsyncStorage.setItem("user", JSON.stringify(store.model));
		},
		canToggleClient: function () {
			return store.getUser() && store.getUser().coach
		},
		isCoach: function () {
			if (document.location.pathname.indexOf("/client") == 0 ) {
				return false;
			}
			return store.getUser() && (store.getUser().coach && !store.getUser().clientContext)
		},
		getNumberOfLicenses: function () {
			return store.getUser() && store.getUser().company && store.getUser().company.proLicenses
		},
		profileComplete: function () {
			if (Constants.simulate.PROFILE_INCOMPLETE)
				return false;

			return store.getUser() && store.getUser().company && store.getUser().company.businessName
		},

		getUser: function () {
			return store.model && store.model.tempUser ? store.model.tempUser : store.model
		}
	});

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
