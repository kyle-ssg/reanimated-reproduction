import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import App from './components/App';
import FriendListApp from './components/pages/HomePage';
import NotFoundView from './components/pages/NotFoundPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={FriendListApp}/>
        <Route path="404" component={NotFoundView}/>
        <Redirect from="*" to="404"/>
    </Route>
);
