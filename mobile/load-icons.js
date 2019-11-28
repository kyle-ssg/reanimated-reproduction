import ION from 'react-native-vector-icons/Ionicons';

import styleVariables from './app/style/project/style_variables';

const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const defaultIconProvider = ION;
let initialised = false;
const icons = {
    // 'ios-menu': [30, styleVariables.navColor],
    // 'ios-add': [30, styleVariables.navColor],
    // 'ios-chatbubbles': [34, styleVariables.navColor],
    // 'ios-home': [34, styleVariables.navColor],
    'md-close': [30, styleVariables.navColor],
    // 'md-paper': [30, styleVariables.navColor],
    'md-home': [30, styleVariables.navColor],
    // 'md-more': [30, styleVariables.navColor],
    // 'ios-arrow-back': [30, styleVariables.navColor],
    // 'ios-search': [30, styleVariables.navColor],
};

global.iconsMap = {};
module.exports = () => new Promise((resolve) => { // cache all icons as images
    // eslint-disable-next-line
    if (initialised){
        return Promise.resolve();
    }
    initialised = true;
    // eslint-disable-next-line new-cap
    new Promise.all(
        Object.keys(icons).map((iconName) => {
            const Provider = icons[iconName][2] || defaultIconProvider; // Ionicons
            return Provider.getImageSource(
                iconName.replace(replaceSuffixPattern, ''),
                icons[iconName][0],
                icons[iconName][1],
            );
        }),
    ).then((sources) => {
        Object.keys(icons)
            .forEach((iconName, idx) => global.iconsMap[iconName] = sources[idx]);

        // Call resolve (and we are done)
        resolve(true);
    });
});
