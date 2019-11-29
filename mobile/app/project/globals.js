import './polyfill';
import './animations';
import '../../strings';
import '../../../common/utils';
import './api/api';
import 'react-native-globals'; // Adds <View etc to global scope
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';
import '../style/style_screen';
import './base-components';
import './project-components';

import ION from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Navigation } from 'react-native-navigation';
import DeviceInfo from 'react-native-device-info';
import LinearGradient from 'react-native-linear-gradient';

import moment from 'moment';
import _ from 'lodash';

global.AsyncStorage = AsyncStorage;
global.NetInfo = NetInfo;

global.Navigation = Navigation;

global.E2E = false;

global.FontAwesome = FontAwesome;
// global.ION = ION;
global.MaterialIcon = MaterialIcon;

global.DeviceInfo = DeviceInfo;
global.LinearGradient = LinearGradient;
global.moment = moment;
global._ = _;
