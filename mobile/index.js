/**
 * @format
 */

import { AppRegistry } from 'react-native';
import 'react-native-globals';
import './app/style/style_screen';
import './app/components/base';
import './app/project/project-components';
import App from './app/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
