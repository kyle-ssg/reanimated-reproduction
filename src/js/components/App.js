import React, {Component, PropTypes} from 'react';
import Popover from '../components/base/Popover';
import AccountStore from '../common/stores/account-store';

firebase.initializeApp(Project.firebase)

class App extends Component {


	constructor(props, context) {
		super(props, context);
	}

	onLogin = () => {
		const {redirect} = this.props.location.query;
		this.context.router.push(redirect ? redirect : window.loginRedirect);
	};

	onLogout = () => {
		this.context.router.replace(window.logoutRedirect);
	};

	onNoUser = () => { //User not found in firebase local storage

	};

	render() {
		return (
			<div>
				<AccountProvider onNoUser={this.onNoUser} onLogout={this.onLogout} onLogin={this.onLogin}>
					{({isLoading, user}) => (
						<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
							<Link className="navbar-brand" to={user ? window.loginRedirect : ""}>Home</Link>
							<Link className="navbar-brand" to={"/login"}>Login</Link>
						</nav>
					)}
				</AccountProvider>
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {};


export default hot(module)(App)
