import {Navigation} from 'react-native-navigation';

require('./app/project/globals');
require('./app/routes');
import ION from 'react-native-vector-icons/Ionicons';
import styleVariables from './app/style/project/style_variables';

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
//
// const getUser = new Promise(function (resolve) {
//     if (Constants.simulate.NEW_USER) {
//         resolve(null)
//     } else {
//         AsyncStorage.getItem('user', (err, res) => {
//             if (res) {
//                 AccountStore.setUser(JSON.parse(res))
//             }
//             resolve(res)
//         });
//     }
// });

Promise.all([Promise.resolve(), iconsLoaded]).then(([user]) => {
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
    Navigation.startSingleScreenApp({
            screen: routeHelper.homeScreen(),
        }
    );
});

console.disableYellowBox = true;


import crashlytics from 'react-native-fabric-crashlytics';
crashlytics.init();
