import './project/window';


import Root from './routes';

const rootElement = document.getElementById('app');

// Render the React application to the DOM
const renderApp = () => {
	ReactDOM.render(
		<Root key={Utils.GUID()}/>,
		rootElement
	)
	;
};

import ToastMessages from './apis/toast';
//Setup for toast messages
ReactDOM.render(<ToastMessages/>, document.getElementById('toast'));

renderApp();
