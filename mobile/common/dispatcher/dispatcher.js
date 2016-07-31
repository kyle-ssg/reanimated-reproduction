var ReactDispatcher = require('flux-react-dispatcher');
var Dispatcher = new ReactDispatcher();

module.exports = _.assign(Dispatcher, {
    handleViewAction: function(action) {
        var that = this;

        var payload = {
            source: 'VIEW_ACTION',
            action: action
        };

        log(payload.action.actionType, payload.action);

        _.defer(function(){
            that.dispatch(payload);
        });

    }

});