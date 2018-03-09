import _ from 'lodash';

module.exports = _.assign({}, require('./base/_app-actions'), {

	getDebt: function () { //when the device goes offline
		Dispatcher.handleViewAction({
			actionType: Actions.GET_DEBT,
		});
	},
	createBill: function (bill) { //when the device goes offline
		Dispatcher.handleViewAction({
			actionType: Actions.CREATE_BILL,
			bill,
		});
	},
	markAsPaid: function (id, userId) { //when the device goes offline
		Dispatcher.handleViewAction({
			actionType: Actions.MARK_AS_PAID,
			id,
			userId,
		});
	},
});

