import './project/polyfil';
import './project/libs';
import './project/api';
import './project/project-components';
import './styles/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import ToastMessages from './project/toast';

import routes from './routes';


const rootElement = document.getElementById('app');

// Render the React application to the DOM
AsyncStorage.getItem('t', (err, res) => {
    if (res) {
        AppActions.setToken(res);
    }

    setTimeout(() => {
        // prefill e2e dom elements with markup
        if (E2E && document.getElementById('e2e-request')) {
            document.getElementById('e2e-request').innerHTML = '{}';
            document.getElementById('e2e-error').innerHTML = '{}';
        }

        ReactDOM.render(
            <Router>{routes}</Router>,
            rootElement,
        );
    }, 1);
});

// Setup for toast messages
ReactDOM.render(<ToastMessages />, document.getElementById('toast'));
