// requires libs, this is separate to window.js as they vary a lot more between projects


// window.DeviceInfo = require('react-native-device-info');
//
//
// window.SideMenu = require('react-native-side-menu');
// import Swipeout from 'react-native-swipeout';
// window.Swipeout = Swipeout;
// import LinearGradient from 'react-native-linear-gradient';
// window.LinearGradient = LinearGradient;
// window.ScrollableTabView = require('react-native-scrollable-tab-view');
// window.ParallaxView = require("react-native-parallax-view");

window.ScrollableTabView = require('react-native-scrollable-tab-view');

window.Icon = require("react-native-vector-icons");
window.FontAwesome = require("react-native-vector-icons/FontAwesome");
window.ION = Animated.createAnimatedComponent(require("react-native-vector-icons/Ionicons"));

import * as firebase from 'firebase';
window.firebase = firebase;
firebase.initializeApp(Project.firebase);


//window.analytics = require('NativeModules').RNSegment;
//window.AdMobBanner = require("react-native-admob").AdMobBanner;
//window.AdMobInterstitial = require("react-native-admob").AdMobInterstitial;


// window.AdMobBanner = require("react-native-admob").AdMobBanner;
// window.AdMobInterstitial = require("react-native-admob").AdMobInterstitial;


// window.Swiper = require('../components/base/Swiper');
