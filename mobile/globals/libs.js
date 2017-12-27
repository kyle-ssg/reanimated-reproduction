import _ from 'lodash';
global._ = _;

import moment from 'moment';
global.moment = moment;

window.Project = require('../common/project');
window.Utils = require('../common/utils/utils');
window.Format = require('../common/utils/format');

import Dispatcher  from'../common/dispatcher/dispatcher';
import AppActions  from'../common/dispatcher/app-actions';
import Actions  from'../common/dispatcher/action-constants';
global.Dispatcher = Dispatcher;
global.AppActions = AppActions;
global.Actions = Actions;

import ION from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
global.FontAwesome = FontAwesome;
global.ION = Animated.createAnimatedComponent(ION);
global.MaterialIcon = MaterialIcon;

import LinearGradient from 'react-native-linear-gradient';
global.LinearGradient = LinearGradient;


import DeviceInfo from 'react-native-device-info';
global.DeviceInfo = DeviceInfo;

import Animation from 'lottie-react-native';
global.Animation = Animation;

// import DatePicker from 'react-native-datepicker';
// global.DatePicker = DatePicker;
import RNFS from 'react-native-fs'
global.RNFS = RNFS;
global.Auth = require('./auth');

import RNFetchBlob from 'react-native-fetch-blob'
global.RNFetchBlob = RNFetchBlob;


import{Navigation} from 'react-native-navigation';
global.Navigation = Navigation;


import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
global.KeyboardAwareScrollView = KeyboardAwareScrollView;

import * as Animatable from 'react-native-animatable';
global.Animatable = Animatable;

import Interactable from 'react-native-interactable';
global.Interactable = Interactable;

Animatable.initializeRegistryWithDefinitions({
	basicListEntrance: {
		from: {opacity: 1, ['translateX']: 40},
		to: {opacity: 1, ['translateX']: 0},
	},
	basicListEntranceFade: {
		from: {opacity: 0, ['translateX']: 40},
		to: {opacity: 1, ['translateX']: 0},
	},
});


import SegmentedControlTab from 'react-native-segmented-control-tab'
global.SegmentedControlTab = SegmentedControlTab;

import {
	CachedImage,
	ImageCacheProvider
} from 'react-native-cached-image';
var Img = CachedImage;
global.ImageCacheProvider = ImageCacheProvider;
global.CachedImage = (props)=>(
	<ImageCacheProvider urlsToPreload={[props.source.uri]}>
		<Img {...props} renderImage={(props)=> props.children ? (
			<ReactNative.ImageBackground imageStyle={props.style} {...props}/>
		) : (
			<Image imageStyle={props.style} {...props}/>
		)}/>
	</ImageCacheProvider>
)

import ImageResizer from 'react-native-image-resizer';
global.ImageResizer = ImageResizer

global.cdn = (url)=> {
	return url.indexOf("change-please.s3-eu-west-1.amazonaws") ==-1 ? url : `${Project.api}image/${encodeURIComponent(url)}`
}
