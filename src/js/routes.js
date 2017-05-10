import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import App from './components/App';
import HomePage from './components/pages/HomePage';
import AccountPage from './components/pages/AccountPage';
import NotFoundPage from './components/pages/NotFoundPage';

//Examples
import LayoutPage from './components/pages/examples/LayoutPage';
import VirtualizedPage from './components/pages/examples/VirtualizedPage';
import InfiniteWindowListPage from './components/pages/examples/InfiniteWindowListPage';
import SassPage from './components/pages/examples/SassPage';
import Examples from './components/pages/examples/Examples';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage}/>
		<Route path="account" component={AccountPage}/>
		<Route path="layout" component={LayoutPage}/>
		<Route path="virtualized" component={VirtualizedPage}/>
		<Route path="infiniteWindowScrollList" component={InfiniteWindowListPage}/>
		<Route path="sass" component={SassPage}/>
		<Route path="example" component={Examples}/>
		<Route path="404" component={NotFoundPage}/>
		<Redirect from="*" to="404"/>
	</Route>
);

//Configure login / logout redirects
window.loginRedirect = '/account';
window.loginPromptRedirect = '/';
window.logoutRedirect = '/';
