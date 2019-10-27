import { NativeModules, PixelRatio } from 'react-native';

import { Platform, Dimensions } from 'react-native';

const em = require('../base/style_pxToEm');


const tabHeight = (() => {
    const isIphoneX = () => {
        let dimensions;
        if (Platform.OS !== 'ios') {
            return false;
        }
        if (Platform.isPad || Platform.isTVOS) {
            return false;
        }
        dimensions = Dimensions.get('window');
        if (dimensions.height === 812 || dimensions.width === 812) { // Checks for iPhone X in portrait or landscape
            return true;
        }
        if (dimensions.height === 896 || dimensions.width === 896) {
            return true;
        }
        return false;
    };

    if (isIphoneX()) {
        return 84; // iPhone X
    } if (Platform.OS == 'ios') {
        return 50; // Other iPhones
    }
    return 56; // Android
})();

window.pallette = {
    bodyBackground: '#fff', // General app  background
    // tabs
    navBarText: 'black',
    navBarIcon: 'black',

    tabIcon: "#666666",
    tabText: "white",
    tabIconActive: "white",
    tabTextActive: "white",
    tabBackground: '#2d2d2d',
    tabActive: "white",

};

window.styleVariables = Object.assign({

}, require('./style_platform_variables'));
