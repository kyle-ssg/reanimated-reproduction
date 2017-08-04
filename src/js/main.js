import './project/window';
import '../styles/styles.scss';
import 'react-virtualized/styles.css';

import '../fonts/fontawesome-webfont.woff';
import '../fonts/fontawesome-webfont.woff2';

import ToastMessages from './apis/toast';

import Root from './routes';

const rootElement = document.getElementById('app');

// Render the React application to the DOM
const renderApp = () => {
    ReactDOM.render(
        <div>
          <Root key={Utils.GUID()}/>
        </div>,
        rootElement
    );
};

if (module.hot) {
    module.hot.accept('./routes', () => renderApp());
}

//Setup for toast messages
ReactDOM.render(<ToastMessages/>, document.getElementById('toast'));

renderApp();

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept('./routes', () => {
            renderApp();
        });
        module.hot.accept('./routes', renderApp);
    }
}