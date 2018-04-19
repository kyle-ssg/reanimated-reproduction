import {Navigation} from 'react-native-navigation';

require('./globals/_window');
require('./routes');
import ION from 'react-native-vector-icons/Ionicons';
import styleVariables from './style/project/style_variables';
import {Dimensions} from 'react-native';

const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const defaultIconProvider = ION;

const icons = {
	"ios-menu": [30, styleVariables.navColor],
	"ios-add": [30, styleVariables.navColor],
	"ios-chatbubbles": [34, styleVariables.navColor],
	"ios-home": [34, styleVariables.navColor],
	"md-close": [30, styleVariables.navColor],
	"md-more": [30, styleVariables.navColor],
	"ios-arrow-back": [30, styleVariables.navColor],
	"ios-search": [30, styleVariables.navColor],
};

global.iconsMap = {};
let iconsLoaded = new Promise((resolve, reject) => { //cache all icons as images
	new Promise.all(
		Object.keys(icons).map(iconName => {
			const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
			return Provider.getImageSource(
				iconName.replace(replaceSuffixPattern, ''),
				icons[iconName][0],
				icons[iconName][1]
			)
		})
	).then(sources => {
		Object.keys(icons)
			.forEach((iconName, idx) => iconsMap[iconName] = sources[idx])

		// Call resolve (and we are done)
		resolve(true);
	})
});

const getUser = new Promise(function (resolve) {
	if (Constants.simulate.NEW_USER) {
		resolve(null)
	} else {
		AsyncStorage.getItem('user', (err, res) => {
			if (res) {
				AccountStore.setUser(JSON.parse(res))
			}
			resolve(res)
		});
	}
});

Promise.all([getUser, iconsLoaded]).then(([user]) => {
	global.iconsMap = iconsMap;

	global.modalNavButtons = {
		leftButtons: [],
		rightButtons: [
			{
				icon: iconsMap['md-close'], // for icon button, provide the local image asset name
				id: 'close', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
			}
		]
	};

	//Can trigger different route based on user

	const iconInsets = { // add this to change icon position (optional, iOS only).
		top: 0, // optional, default is 0.
		left: 0, // optional, default is 0.
		bottom: 0, // optional, default is 0.
		right: 0 // optional, default is 0.
	}
	// Navigation.startTabBasedApp({
// 	tabs: [
// 		{
// 			label: 'One', // tab label as appears under the icon in iOS (optional)
// 			screen: '/', // unique ID registered with Navigation.registerScreen
// 			icon: iconsMap['ios-home'], // local image asset for the tab icon unselected state (optional on iOS)
// 			selectedIcon: iconsMap['ios-home'], // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
// 			iconInsets,
// 			title: 'Screen One', // title of the screen as appears in the nav bar (optional)
// 			navigatorStyle: {}, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
// 			navigatorButtons: {} // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
// 		},
// 		{
// 			label: 'Two',
// 			iconInsets,
// 			screen: '/about', // unique ID registered with Navigation.registerScreen
// 			icon: iconsMap['ios-chatbubbles'], // local image asset for the tab icon unselected state (optional on iOS)
// 			selectedIcon: iconsMap['ios-chatbubbles'], // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
// 			title: 'Screen Two'
// 		}
// 	],
// 	tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
// 		// tabBarHideShadow: true,
// 		// tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
// 		// tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
// 		// tabBarBackgroundColor: '#551A8B', // optional, change the background color of the tab bar
// 		initialTabIndex: 1, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
// 	},
// 	appStyle: {
// 		bottomBarBorderColor: "red",
// 		orientation: 'portrait', // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
// 		bottomTabBadgeTextColor: 'red', // Optional, change badge text color. Android only
// 		bottomTabBadgeBackgroundColor: 'green', // Optional, change badge background color. Android only
// 		icon: iconsMap['ios-arrow-back'], // local image asset for the tab icon unselected state (optional on iOS)
// 		hideBackButtonTitle: true / false // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only
// 	},
// 	passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
// 	animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
// });

//Start at login screen, todo: could perhaps start at challenge screen
Navigation.startSingleScreenApp({
		screen: {
			title: 'SSG Boilerplate',
			navigatorStyle: {
				screenBackgroundColor: '#fff',
			},
			screen: '/', // unique ID registered with Navigation.registerScreen
			navigatorButtons: {
				leftButtons: [],
				rightButtons: [
					{
						icon: iconsMap['ios-menu'], // for icon button, provide the local image asset name
						id: 'back', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
					}
				]
			},
		},
	}
);
});

console.disableYellowBox = true;


import crashlytics from 'react-native-fabric-crashlytics';
const path = `${RNFS.MainBundlePath}/sourcemap.js`
crashlytics.init()
