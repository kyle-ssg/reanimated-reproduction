
import './project/window';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized/styles.css';
import '../styles/bootstrap.min.css';
import '../styles/styles.scss';

import '../fonts/fontawesome-webfont.woff';
import '../fonts/fontawesome-webfont.woff2';
// import '../fonts/fontawesome-webfont.eot';
// import '../fonts/fontawesome-webfont.ttf';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
const rootElement = document.getElementById('app');

// Render the React application to the DOM
ReactDOM.render(
    <Router history={browserHistory} routes={routes}/>,
    rootElement
);
