

// requires libs, this is separate to window.js as they vary a lot more between projects

//Included in 99% of projects
window.ScrollableTabView = require('react-native-scrollable-tab-view');
window.Icon = require("react-native-vector-icons");
window.FontAwesome = require("react-native-vector-icons/FontAwesome");
window.ION = Animated.createAnimatedComponent(require("react-native-vector-icons/Ionicons"));
window.DeviceInfo = require('react-native-device-info');
window.SideMenu = require('react-native-side-menu');


import * as firebase from 'firebase';
window.firebase = firebase;