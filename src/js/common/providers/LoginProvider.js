/**
 * Created by kyle- on 6/4/2017.
 */
import React, {Component, PropTypes} from 'react';
import AccountStore from '../stores/account-store';
Auth.Google.configure({
	clientID: Project.google.iosClientId,
	scopes: ['openid', 'email', 'profile'],
	shouldFetchBasicProfile: true
});
const TheComponent = class extends Component {
	displayName: 'TheComponent'

	constructor(props, context) {
		super(props, context);
		ES6Component(this);
		this.state = {};
	}

	componentDidMount() {
		console.log("Mount")
		this.listenTo(AccountStore, 'change', () => {
			this.setState({isLoading: AccountStore.isLoading});
		});
		this.listenTo(AccountStore, 'loaded', () => {
			this.props.onLogin && this.props.onLogin();
		});
	}

	google = () => {
		this.setState({isLoading: true});
		Auth.Google.login()
			.then((token) => AppActions.login('GOOGLE', token)).catch(() => {
			this.setState({isLoading: false})
		})
	};

	facebook = () => {
		this.setState({isLoading: true});
		Auth.Facebook.login()
			.then((token) => AppActions.login('FACEBOOK', token)).catch(() => {
			this.setState({isLoading: false});
		})
	};

	render() {
		const {google, facebook, twitter} = this;
		return this.props.children(AccountStore.getUser(), this.state.isLoading, {google, facebook, twitter});
	}
};

TheComponent.propTypes = {};

module.exports = TheComponent;
