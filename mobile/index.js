var appStart = new Date().valueOf();
import './app/project/globals'
import './app/routes'

import routeHelper  from'./app/route-helper';
global.routeHelper = routeHelper;

import{Navigation} from 'react-native-navigation';
import ION from 'react-native-vector-icons/Ionicons';
import styleVariables from './app/styles/styleVariables';
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
            .forEach((iconName, idx) => iconsMap[iconName] = sources[idx]);

        // Call resolve (and we are done)
        resolve(true);
    })
});

const getUser = new Promise(function (resolve) {
   resolve();
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


    //Start at login screen, todo: could perhaps start at challenge screen
    Navigation.startSingleScreenApp({
            screen: {
                title: 'SSG Boilerplate',
                navigatorStyle: {
                    screenBackgroundColor: '#fff',
                },
                screen: '/', // unique ID registered with Navigation.registerScreen
                navigatorButtons: {
                    leftButtons: []
                }, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
            },
        }
    );
});



//Used to track initial render time
global.appStart = appStart;

//Crash logging
import crashlytics from 'react-native-fabric-crashlytics';
crashlytics.init();





