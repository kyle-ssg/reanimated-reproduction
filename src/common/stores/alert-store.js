var BaseStore = require('./_store'),
    alertAPI = require('../data/alert');

var controller = {
        setAlertInfo(code, id, value) {
            store.saving();
            var promise = null;

            if (store.getAlertValue(code) == value) {
                promise = Promise.resolve();
            } else {
                if (value) {
                    if (store.model[code]) { //alert exists, update it
                        console.log("Updating", code)
                        store.model[code].mobileAlert = value;
                        promise = alertAPI.update(AccountStore.getUserId(), store.model[code]);
                    } else {
                        var create = store.getAlertForCreate(id);
                        console.log("Creating", code, create)
                        promise = alertAPI.create(AccountStore.getUserId(), create);
                    }
                } else {
                    if (store.model[code]) {
                        store.model[code].mobileAlert = value;
                        console.log("Updating", code);
                        promise = alertAPI.update(AccountStore.getUserId(), store.model[code]);
                    }
                }
            }

            store.saving();
            promise.then((res) => {
                if (res){
                    store.model[code] = res;
                }
                SecuredStorage.setItem("alerts", store.model);
                store.saved();
            });
        },
        getAlertInfo() {
            store.loading();
            alertAPI.get(AccountStore.getUserId())
                .then((res) => {
                    store.model = _.keyBy(res, (alert) => {
                        return alert.observationHeading.code;
                    });
                    SecuredStorage.setItem("alerts", store.model);
                    store.loaded();
                })
        }
    },
    store = _.assign({}, BaseStore, {
        id: 'account',
        token: null,
        error: null,
        model: null,
        getAlertValue(heading) {
            return store.model && store.model[heading] && store.model[heading].mobileAlert;
        },
        getAlertForCreate(id) {
            return Object.assign({}, {
                "user": { "id": AccountStore.getUserId(id) },
                "observationHeading": { id },
                "mobileAlert": true,
                "alertType": "RESULT"
            })
        },
        dispatcherIndex: Dispatcher.register(this, function (payload) {
            var action = payload.action; // this is our action from handleViewAction

            switch (action.actionType) {
                case Actions.GET_ALERT_INFO:
                    controller.getAlertInfo();
                    break;
                case Actions.SET_ALERT_INFO:
                    controller.setAlertInfo(action.code, action.id, action.value);
                    break;
                case Actions.DATA:
                    const data = action.data;
                    if (data.alerts) {
                        store.alerts = data.alerts;
                    }
                    break;
                default:
                    return;
            }
        })
    });

controller.store = store;
module.exports = controller.store;


var x = [{
    "id": 5150746,
    "alertType": "RESULT",
    "webAlert": true,
    "webAlertViewed": true,
    "emailAlert": true,
    "emailAlertSent": true,
    "mobileAlert": false,
    "mobileAlertSent": false,
    "latestValue": null,
    "latestDate": null,
    "user": {
        "id": 4679315,
        "username": "1234",
        "forename": "12334",
        "surname": "1234",
        "dateOfBirth": "2007-06-04",
        "deleted": false,
        "roleDescription": null,
        "picture": null,
        "canSwitchUser": false
    },
    "observationHeading": {
        "id": 4099866,
        "code": "adjustedcalcium",
        "heading": "AdjCa",
        "name": "Adjusted Calcium (2.1-2.6) Click for info",
        "infoLink": "http://www.rixg.org/results/adjcalcium.html",
        "panel": 2,
        "panelOrder": 10
    }
}, {
    "id": 5150747,
    "alertType": "RESULT",
    "webAlert": true,
    "webAlertViewed": true,
    "emailAlert": true,
    "emailAlertSent": true,
    "mobileAlert": false,
    "mobileAlertSent": false,
    "latestValue": null,
    "latestDate": null,
    "user": {
        "id": 4679315,
        "username": "1234",
        "forename": "12334",
        "surname": "1234",
        "dateOfBirth": "2007-06-04",
        "deleted": false,
        "roleDescription": null,
        "picture": null,
        "canSwitchUser": false
    },
    "observationHeading": {
        "id": 4099916,
        "code": "ciclosporin",
        "heading": "Ciclo",
        "name": "Ciclosporin (cyclosporin) Click for info",
        "infoLink": "http://www.rixg.org/results/ciclosporin.html",
        "panel": 3,
        "panelOrder": 6
    }
}]