import _window from './project/_window';
import App from './components/App';

class mobile extends React.Component {
  render () {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('mobile', () => mobile);
