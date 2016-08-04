import './project/window';
import '../styles/styles.scss';
import 'react-virtualized/styles.css';

import '../fonts/fontawesome-webfont.woff';
import '../fonts/fontawesome-webfont.woff2';

import {Router, browserHistory} from 'react-router';
import routes from './routes';
const rootElement = document.getElementById('app');

// Render the React application to the DOM
ReactDOM.render(
  <Router history={browserHistory} routes={routes}/>,
  rootElement
);
