module.exports = {
  getConfig: function () { //get upcoming routes
    Dispatcher.handleViewAction({
      actionType: Actions.GET_CONFIG
    });
  },
  refresh: function () { //refresh the entire app
    Dispatcher.handleViewAction({
      actionType: Actions.REFRESH
    });
  },
  registerNotifications: function (data) {
    Dispatcher.handleViewAction({
      actionType: Actions.REGISTER_NOTIFICATIONS,
      data: data
    });
  },
  setUser: function (user) {
    Dispatcher.handleViewAction({
      actionType: Actions.SET_USER,
      user
    });
  }
};
