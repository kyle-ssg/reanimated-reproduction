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

// Segment analytics
import RNSegmentIO from 'react-native-segment-analytics';
window.analytics = RNSegmentIO;
analytics.setup('eJ4jplD0TFwOmZAyV801eB1quoAKSUBn');

// Segment analytics testing - identify - normally only called once on sign up and then whenever traits change
/*analytics.identify('luke@solidstategroup.com',
 {
 name: 'Luke Fanning',
 developer: true,
 createdAt: new Date()
 }
 );*/
// Can also use an anonymous id
window.anonId = DeviceInfo.getUniqueID();
analytics.identify(anonId,
  {
    name: 'Anonymous Mobile Bro'
  }
);
