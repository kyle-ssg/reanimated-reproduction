import React, {Component, PropTypes} from 'react';
import AccountStore from '../stores/account-store';
const TheComponent = class extends Component {
	displayName: 'TheComponent'

	constructor(props, context) {
		super(props, context);
		this.state = {
			isLoading: true,
			user: AccountStore.getUser()
		};

		ES6Component(this);

		this.listenTo(AccountStore, 'change', () => {
			this.setState({
				isLoading: AccountStore.isLoading,
				isSaving: AccountStore.isSaving,
				user: AccountStore.getUser()
			});
			this.props.onLogin && this.props.onLogin();
		});

		this.listenTo(AccountStore, 'saved', () => {
			this.props.onSave && this.props.onSave(AccountStore.savedId);
		});

		this.listenTo(AccountStore, 'logout', () => {
			this.setState({
				isLoading: false,
				isSaving: false,
				user: AccountStore.getUser()
			}, this.props.onLogout);
		});
		this.listenTo(AccountStore, 'no-user', () => {
			this.setState({
				isSaving: false,
				isLoading: false,
				user: AccountStore.getUser()
			});
			this.props.onNoUser && this.props.onNoUser();
		});

	}

	render() {
		var {isLoading, isSaving, user} = this.state
		return (
			this.props.children({
				isLoading,
				isSaving,
				user
			})
		);
	}
};

TheComponent.propTypes = {};

module.exports = TheComponent;
