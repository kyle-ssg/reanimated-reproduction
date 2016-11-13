// requires libs, this is separate to window.js as they vary a lot more between projects

//Included in 99% of projects
window.ScrollableTabView = require('react-native-scrollable-tab-view');

import ION from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
window.FontAwesome = FontAwesome;
window.ION = ION;

window.DeviceInfo = require('react-native-device-info');
window.SideMenu = require('react-native-side-menu');
import {Link, Back, Forward} from "react-router-native";
window.Link = Link;
window.Back = Back;
window.Forward = Forward;

// Segment analytics, included in all however will need to change key if used
import RNSegmentIO from 'react-native-segment-analytics';
window.analytics = RNSegmentIO;
analytics.setup(Project.analytics);

//Digits, included in all however will need to change key if used
var Digits = require('react-native-fabric-digits');
var { DigitsLoginButton, DigitsLogoutButton } = Digits;
window.DigitsLoginButton = DigitsLoginButton;
window.DigitsLogoutButton = DigitsLogoutButton;

//Firebase auth, only for some projects
import FireAuth from 'react-native-firebase-auth';
window.FireAuth = FireAuth;


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

