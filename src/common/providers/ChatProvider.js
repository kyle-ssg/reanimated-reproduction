import React, {Component, PropTypes} from 'react';
import ConfigStore from '../stores/chat-store';
const TheComponent = class extends Component {
	displayName: 'TheComponent'

	constructor(props, context) {
		super(props, context);
		ES6Component(this);

		this.state = {
			isLoading: ConfigStore.isLoading,
			model: ConfigStore.model || {},
			festivals: ConfigStore.festivals,
			isMasterApp: ConfigStore.isMasterApp
		};
		this.listenTo(ConfigStore, 'change', () => {
			this.setState({
				isLoading: ConfigStore.isLoading,
				model: ConfigStore.model || {},
			})
		});
	}

	render() {
		return this.props.children(this.state.isLoading, this.state.model);
	}
};

TheComponent.propTypes = {};

module.exports = TheComponent;
