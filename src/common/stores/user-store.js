var BaseStore = require('./_store'),
    api = require('../data/user'),
    _data = require('../data/_data');

var controller = {
        getUsers: function(params) {
            store.loading();
            api.get(params)
                .then((data) => {
                    store.model = data;
                    store.loaded();
                })
                .catch(_.partial(AjaxHandler.error, store))
        }
    },
    store = _.assign({}, BaseStore, {
        id: 'user',
        model: null,
        getUsers: function() {
            return this.model && this.model.content;
        },
        dispatcherIndex: Dispatcher.register(function (payload) {
            var action = payload.action;

            switch (action.actionType) {
                case Actions.GET_USERS:
                        controller.getUsers(action.params);
                    break;
                default:
                    return;
            }
        })
    });

controller.store = store;
module.exports = controller.store;