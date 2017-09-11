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
                AccountStore.setModel(JSON.parse(res))
            }
            resolve(res)
        });
    }
});

Promise.all([getUser, iconsLoaded]).then((user) => {
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
            drawer: { // optional, add this if you want a side menu drawer in your app
                right: { // optional, define if you want a drawer from the right
                    screen: 'drawer', // unique ID registered with Navigation.registerScreen
                },
                style: {
                    backgroundColor: 'transparent',
                    drawerShadow: 'NO',
                    contentOverlayColor: 'rgba(0,0,0,.5)',
                    rightDrawerWidth: ((DeviceWidth - 64) / DeviceWidth) * 100
                },
                disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
            }
        }
    );

});

console.disableYellowBox = true;