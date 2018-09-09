var ReactDispatcher = require('flux-react-dispatcher');
var _Dispatcher = new ReactDispatcher();

const Dispatcher = Object.assign(_Dispatcher, {
	handleViewAction: function (action) {
		var that = this;

		var payload = {
			source: 'VIEW_ACTION',
			action: action
		};

		API.log(payload.action.actionType, payload.action);

		that.dispatch(payload);

	}
});

export default Dispatcher;
window.Dispatcher = Dispatcher;
