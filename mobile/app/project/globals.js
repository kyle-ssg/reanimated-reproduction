import './polyfill';
import './api';

//Lodash
import each from 'lodash/each';
import map from 'lodash/map';
import filter from 'lodash/filter';
import find from 'lodash/find';
import partial from 'lodash/partial';
import cloneDeep from 'lodash/cloneDeep';
import findIndex from 'lodash/findIndex';
import range from 'lodash/range';
import keyBy from 'lodash/keyBy';

window._ = {each, filter, find, partial, findIndex, range, map, cloneDeep, keyBy};


import 'react-native-globals'; //Adds <View etc to global scope

import {globalise} from '../components/base-components'; //Adds <Flex,Row,Container etc
globalise();

import Fade from '../components/animation/Fade'
import Loader from '../components/animation/Loader'

import ION from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
global.FontAwesome = FontAwesome;
global.ION = ION;
global.MaterialIcon = MaterialIcon;



global.Fade = Fade;
global.Loader = Loader;


import Constants from '../../common-mobile/constants';
import Utils from '../../common-mobile/utils/utils';
import Format from '../../common-mobile/utils/format';
global.Constants = Constants;
global.Utils = Utils;
global.Format = Format;

//Flux dispatcher
import ES6Component from '../../common-mobile/ES6Component';
import Dispatcher from '../../common-mobile/dispatcher/dispatcher';
import AppActions from '../../common-mobile/dispatcher/app-actions';
import Actions from '../../common-mobile/dispatcher/action-constants';

global.Dispatcher = Dispatcher;
global.ES6Component = ES6Component;
global.AppActions = AppActions;
global.Actions = Actions;