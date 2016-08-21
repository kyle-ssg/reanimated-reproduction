import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';

import App from './components/App';
import HomePage from './components/pages/HomePage';
import LayoutPage from './components/pages/LayoutPage';
import NotFoundPage from './components/pages/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="layout" component={LayoutPage}/>
    <Route path="404" component={NotFoundPage}/>
    <Redirect from="*" to="404"/>
  </Route>
);
