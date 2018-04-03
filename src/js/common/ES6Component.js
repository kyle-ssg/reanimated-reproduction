import _ from 'lodash';
import React, {Component, PropTypes} from 'react';

const TheComponent = class extends Component {

	constructor(props) {
		super(props);
		this._listeners = [];
		this.state = {}
	}

	listenTo = (store, event, callback) => {
		this._listeners.push({
			store: store,
			event: event,
			callback: callback
		});
		store.on(event, callback);
		return this._listeners.length;
	};

	stopListening = (index) => {
		var listener = this._listeners[index];
		listener.store.off(listener.event, listener.callback);
	};

	componentWillUnmount() {
		_.each(this._listeners, function (listener, index) {
			if (listener)
				this.stopListening(index);
		}.bind(this));
	}

};

module.exports = TheComponent;
