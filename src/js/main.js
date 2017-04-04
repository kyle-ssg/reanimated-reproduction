import './project/window';
import '../styles/styles.scss';
import 'react-virtualized/styles.css';

import '../fonts/fontawesome-webfont.woff';
import '../fonts/fontawesome-webfont.woff2';

import ToastMessages from './apis/toast';

import {Router, browserHistory} from 'react-router';
import routes from './routes';
const rootElement = document.getElementById('app');

if (module.hot) {
  module.hot.accept();
}

// Render the React application to the DOM
ReactDOM.render(
  <Router history={browserHistory} routes={routes}/>,
  rootElement
);

//Setup for toast messages
ReactDOM.render(<ToastMessages />, document.getElementById('toast'));
