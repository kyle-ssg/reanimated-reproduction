import './polyfill';
import './animations';
import './api/api';
import 'react-native-globals'; // Adds <View etc to global scope
import '../style/style_screen';
import './base-components';
import './project-components';

import ION from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import _ from 'lodash';
import ViewOverflow from 'react-native-view-overflow';
import Constants from '../../common-mobile/constants';
import Utils from '../../common-mobile/utils/utils';
import Format from '../../common-mobile/utils/format';

// Flux dispatcher
import ES6Component from '../../common-mobile/ES6Component';
import Dispatcher from '../../common-mobile/dispatcher/dispatcher';
import AppActions from '../../common-mobile/dispatcher/app-actions';
import Actions from '../../common-mobile/dispatcher/action-constants';


global.FontAwesome = FontAwesome;
global.ION = ION;
global.MaterialIcon = MaterialIcon;
global.Constants = Constants;
global.Utils = Utils;
global.Format = Format;

global.Dispatcher = Dispatcher;
global.ES6Component = ES6Component;
global.AppActions = AppActions;
global.Actions = Actions;
global.LinearGradient = LinearGradient;
global.moment = moment;
global._ = _;
global.ViewOverflow = ViewOverflow;
