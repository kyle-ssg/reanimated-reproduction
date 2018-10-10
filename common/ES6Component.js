/* eslint-disable no-param-reassign */

// todo: this could be a class and more appropriately named
global.ES6Component = (context, onUnmount) => {
  context._listeners = [];

  context.listenTo = (store, event, callback) => {
    this._listeners.push({
      store,
      event,
      callback,
    });
    store.on(event, callback);
    return this._listeners.length;
  };

  context.stopListening = (index) => {
    const listener = this._listeners[index];
    listener.store.off(listener.event, listener.callback);
  };

  context.componentWillUnmount = () => {
    _.each(this._listeners, (listener, index) => {
      if (listener) this.stopListening(index);
    });
    if (onUnmount) {
      onUnmount();
    }
  };
};
