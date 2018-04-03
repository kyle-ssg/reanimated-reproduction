//Configure login / logout redirects
window.loginRedirect = '/account';
window.loginPromptRedirect = '/';
window.logoutRedirect = '/';

import React from 'react';
import {Route, Link, Router, IndexRoute, Redirect, Switch} from 'react-router-dom';

window.Link = Link;
import App from './components/App';
import NotFoundPage from './components/pages/NotFoundPage';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/examples/login/LoginExample';
import AccountStore from './common/stores/account-store';

//Examples

import { hot } from 'react-hot-loader'


const authRedirect = (page) => {
	return AccountStore.getUser() ? page :
		<Redirect to={`/login?redirect=${encodeURIComponent(document.location.pathname)}`}/>
};


import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const TheComponent = class extends React.Component {

	render() {
		return (
			<Router history={history}>
				<App>
					<Switch>
						<Route exact path="/" component={HomePage}/>
						<Route path="/login" component={LoginPage}/>
						<Route exact path="/protected"  render={(props) => authRedirect(<HomePage {...props}/>)}/>
						<Route exact path="*" component={NotFoundPage}/>
					</Switch>
				</App>
			</Router>
		);
	}
};

TheComponent.propTypes = {};

export default hot(module)(TheComponent)

