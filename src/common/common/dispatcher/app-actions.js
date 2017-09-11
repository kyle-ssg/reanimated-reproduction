module.exports = Object.assign({}, require('./base/_app-actions'), {
	doFoo: function (bar) {
		Dispatcher.handleViewAction({
			actionType: Actions.DO_FOO,
			bar
		});
	}
});
