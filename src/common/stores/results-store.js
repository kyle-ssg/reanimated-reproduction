var BaseStore = require('./_store'),
    api = require('../data/results');

var controller = {

        getResultsSummary: function (userId) {
            if (!userId) return
            store.loading();
            api.getResultsSummary(userId)
                .then(this.loadedResultsSummary)
                .catch(_.partial(AjaxHandler.error, store))
        },

        loadedResultsSummary: function (data) {
            var allPanels = [];
            var latestObservationDate = 0;
            var latestObservation = null;

            AsyncStorage.getItem("latestReadResult", (err, res) => {
                if (res && !Constants.simulate.NOT_READ_RESULTS) {
                    store.latestReadResult = parseInt(res);
                } else {
                    store.latestReadResult = 0;
                }
                _.each(data, (groupData) => {
                    //Every group

                    var sortedPanels = _.sortBy(_.flatMap(groupData.panels), (panelItem) => {
                        if (!panelItem.latestObservation) {// if there's no observation, deprioritise the panel
                            return 999999;
                        }
                        // panel number, panel order
                        return (panelItem.panel * 100) + panelItem.panelOrder - panelItem.latestObservation.applies;
                    });

                    _.each(sortedPanels, (panel) => {
                        //Every panel
                        var panelResultDate = panel.latestObservation && panel.latestObservation.applies
                        panel.group = groupData.group;
                        panel.search = panel.heading.toLowerCase(); // cache a value used for search
                        allPanels.push(panel); //add panel to all results


                        if (panelResultDate && panelResultDate > latestObservationDate) { //store latest observation date
                            latestObservationDate = panelResultDate;
                            latestObservation = panel;
                        }

                    });

                });

                store.resultsSummary = { allPanels, latestObservationDate, latestObservation };
                SecuredStorage.setItem("resultsSummary", store.resultsSummary);


                AsyncStorage.getItem("latestObservationDate", (err, res) => {
                    const newLatest = latestObservationDate + ""

                    if (newLatest != res) { // if the latest observation date is different , sync all results
                        AsyncStorage.setItem("latestObservationDate", newLatest);
                    }
                    var i = 0;


                    _.each(store.getResultPanels(), (panel) => {
                        AsyncStorage.getItem(panel.code, (err, res) => {
                            let shouldUpdate = true;
                            if (res) {
                                if (parseInt(res) >= latestObservationDate) {
                                  shouldUpdate = false;
                                }
                            }

                            if (shouldUpdate) {
                                setTimeout(() => { //Sync results in a staggered fashion to prevent any CPU load
                                    AppActions.getResults(panel.code);
                                }, i++ * 200);
                            }
                        });
                    });

                    store.changed();


                });

                store.loaded();
            });

        }
    },
    store = _.assign({}, BaseStore, {
        id: 'results',
        resultsSummary: null,
        availableObservationHeadings: null,
        hasNewResults: function () {
            var latestRead = store.latestReadResult;
            if (!latestRead) {
                return true
            }
            return store.getResultsSummary() && store.getResultsSummary().latestObservationDate > latestRead;
        },
        getResults: function () {
            return this.results;
        },
        getResultsSummary: function () {
            return this.resultsSummary;
        },
        getResultPanels: function () {
            return this.resultsSummary && this.resultsSummary.allPanels;
        },
        dispatcherIndex: Dispatcher.register(this, function (payload) {
            var action = payload.action; // this is our action from handleViewAction

            switch (action.actionType) {

                case Actions.GET_RESULTS_SUMMARY:
                    controller.getResultsSummary(AccountStore.getUserId());
                    break;
                case Actions.CONNECTED:
                    AccountStore.getUserId() && controller.getResultsSummary(AccountStore.getUserId());
                    break;
                case Actions.DATA:
                    const data = action.data;
                    if (data.resultsSummary) {
                        AsyncStorage.getItem("latestReadResult", (err, res) => {
                            if (res && !Constants.simulate.NOT_READ_RESULTS) {
                                store.latestReadResult = parseInt(res);
                            }
                            store.resultsSummary = data.resultsSummary;
                        });
                    }
                    break;
                case Actions.ACTIVE: {
                    if (action.sessionLength > 5000) {
                        controller.getResultsSummary(AccountStore.getUserId());
                    }
                }
                case Actions.LOGOUT: {
                    store.latestReadResult = null;
                }
                case Actions.SET_LAST_READ_RESULTS:
                    if (!store.resultsSummary)
                        return;
                    if (store.latestReadResult != store.resultsSummary.latestObservationDate) {
                        store.latestReadResult = store.resultsSummary.latestObservationDate;
                        store.changed();
                        AsyncStorage.setItem("latestReadResult", store.latestReadResult + "");
                    }
                    break;
                default:
                    return;
            }
        })
    });

controller.store = store;
module.exports = controller.store;