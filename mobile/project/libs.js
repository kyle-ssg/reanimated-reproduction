// requires libs, this is separate to window.js as they vary a lot more between projects

//Included in 99% of projects
window.ScrollableTabView = require('react-native-scrollable-tab-view');

import ION from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
window.FontAwesome = FontAwesome;
window.ION = ION;

window.SideMenu = require('react-native-side-menu');

// Google analytics
import { GoogleAnalyticsTracker} from 'react-native-google-analytics-bridge';
window.gaTracker = new GoogleAnalyticsTracker(Project.analytics);

//Digits, included in all however will need to change key if used
var Digits = require('react-native-fabric-digits');
var { DigitsLoginButton, DigitsLogoutButton } = Digits;
window.DigitsLoginButton = DigitsLoginButton;
window.DigitsLogoutButton = DigitsLogoutButton;

//Firebase
import * as firebase from 'firebase';
window.firebase = firebase;

//Firebase auth, only for some projects
import FireAuth from 'react-native-firebase-auth';
window.FireAuth = FireAuth;

// Crashlytics
const Fabric = require('react-native-fabric');
const { Crashlytics } = Fabric;
window.Crashlytics = Crashlytics;

// react-native-fabric-crashlytics - Overrides React Native's default global error handler to report all fatal JS errors to Crashlytics
import crashlytics from 'react-native-fabric-crashlytics';
crashlytics.init();

// Segment analytics testing - identify - normally only called once on sign up and then whenever traits change
/*analytics.identify('luke@solidstategroup.com',
 {
 name: 'Luke Fanning',
 developer: true,
 createdAt: new Date()
 }
 );*/
// Can also use an anonymous id
// window.anonId = DeviceInfo.getUniqueID();
// analytics.identify(anonId,
//   {
//     name: 'Anonymous Mobile Bro'
//   }
// );
