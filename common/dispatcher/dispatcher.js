const ReactDispatcher = require('flux-react-dispatcher');

const _Dispatcher = new ReactDispatcher();

const Dispatcher = Object.assign(_Dispatcher, {
  handleViewAction(action) {
    const that = this;

    const payload = {
      source: 'VIEW_ACTION',
      action,
    };

    API.log(payload.action.actionType, payload.action);

    that.dispatch(payload);
  },
});

export default Dispatcher;
window.Dispatcher = Dispatcher;
