/**
 * @format
 */

import { AppRegistry } from 'react-native';
import 'react-native-globals';
import './app/style/style_screen';
import './app/components/base';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
