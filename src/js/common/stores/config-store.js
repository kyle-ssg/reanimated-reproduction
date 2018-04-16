var BaseStore = require('./_store'),
	api = require('../data/config');

var controller = {
		get() {
			store.loading();
			api.get()
				.then(controller.loaded);
		},
		loaded(res) {
			store.model = res;
			store.model.stations = store.model.stations.map((station) => {
				return {
					_id: station._id,
					type: station.type,
					shortCode: station.shortCode,
					name: station.stationName,
					search: station.stationName.toLowerCase()
				}
			});

			AsyncStorage.setItem('config', JSON.stringify(store.model));
			store.loaded();
		}
	},
	store = Object.assign({}, BaseStore, {
		id: 'config',
		getStations() {
			return store.model && store.model.stations || [];
		},
		getTocFromDelay(delay) {
			return _.find(store.model.tocs, {atocCode: delay.atocCode});
		},
		dispatcherIndex: Dispatcher.register(this, function (payload) {
			var action = payload.action; // this is our action from handleViewAction

			switch (action.actionType) {
				case Actions.GET_CONFIG:
					controller.get();
					break;
				default:
					return;
			}
		})
	});

// AsyncStorage.getItem('config', (err, res) => {
//   if (res) {
//     store.model = JSON.parse(res);
//   }
//   controller.get();
// });

controller.store = store;
module.exports = controller.store;
