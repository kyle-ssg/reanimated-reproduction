/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import _window from './project/_window';
import App from './components/App';

class rnfire extends React.Component {
  render() {
    return (
        <App/>
  );
  }
}


AppRegistry.registerComponent('rnfire', () => rnfire);
