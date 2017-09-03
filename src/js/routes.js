//Configure login / logout redirects
window.loginRedirect = '/account';
window.loginPromptRedirect = '/';
window.logoutRedirect = '/';

import React from 'react';
import {Route, Link, Router, IndexRoute, Redirect, Switch} from 'react-router-dom';
window.Link = Link;
import App from './components/App';
import NotFoundPage from './components/pages/NotFoundPage';
import AccountStore from './common/stores/account-store';

//Examples
import LayoutPage from './components/pages/examples/LayoutPage';
import VirtualizedPage from './components/pages/examples/VirtualizedPage';
import InfiniteWindowListPage from './components/pages/examples/InfiniteWindowListPage';
import Form from './components/examples/FormExamples';
import SassPage from './components/pages/examples/SassPage';
import Examples from './components/pages/examples/Examples';

const authRedirect = (page) => {
	return AccountStore.getUser() ? page :
		<Redirect to={`/?redirect=${encodeURIComponent(document.location.pathname)}`}/>
};

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const TheComponent = class extends React.Component {

    render() {
        return (
			<Router history={history}>
				<App>
					<Switch>
						<Route exact path="/" component={Form}/>
						<Route
							render={() => authRedirect(<AccountPage/>)}
							path="/account"/>
						<Route path="/layout" component={LayoutPage}/>
						<Route path="/virtualized" component={VirtualizedPage}/>
						<Route path="/infiniteWindowScrollList" component={InfiniteWindowListPage}/>
						<Route path="/sass" component={SassPage}/>
						<Route path="/example" component={Examples}/>
						<Route component={NotFoundPage}/>
					</Switch>
				</App>
			</Router>
        );
    }
};

TheComponent.propTypes = {};

module.exports = TheComponent;
