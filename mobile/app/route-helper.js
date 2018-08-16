var currentScreen = '/';
import AccountStore from '../common-mobile/stores/account-store'
import {Navigation} from "react-native-navigation";


module.exports = {
    navEvents: {
        SHOW: 'didAppear',
        HIDE: 'didDisappear'
    },
    closeDrawer: (navigator) => {
        navigator.toggleDrawer({
            to: 'closed',
            side: 'right',
            animated: true
        });
    },

    openDrawer: (navigator) => {
        navigator.toggleDrawer({
            side: 'right',
            animated: true
        });
    },

    homeScreen: () => {
        return {
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
            }
        }
    },

    //Global handling for pages - can plug into analytics / deep linmking
    handleNavEvent: (navigator, id, cb) => {
        navigator.setOnNavigatorEvent((event) => {
            switch (event.id) {
                case 'willAppear':
                    global.currentNavigator = navigator;
                    global.currentScreen = id;
                    break;
                case 'didAppear':
                    break;
                case 'willDisappear':
                    break;
                case 'didDisappear':
                    break;
            }

            if (event.type == 'DeepLink') {
                //Handle deep linking
                routeHelper[event.link] && routeHelper[event.link](navigator);
            } else if (event.id == 'side-menu') {
                //Handle open drawer
                routeHelper.openDrawer(navigator);
            }

            cb && cb(event);

        });
    },

    goAbout: (navigator) => {
        navigator.push({
            screen: "/about",
            title: "About",
            backButtonTitle: "",
            passProps: {}
        });
    },

    openWebModal: (uri, title) => {
        Navigation.showModal({
            screen: "/webmodal",
            title: title || '',
            navigatorButtons: _.cloneDeep(global.modalNavButtons),
            navigatorStyle: global.navbarStyle,
            passProps: {uri, title}
        });
    },

    showExampleLightbox: (navigator) => {
        navigator.showLightBox({
            screen: "/examples/lightbox", // unique ID registered with Navigation.registerScreen
            style: {
                width: DeviceWidth,
                height: DeviceHeight,
                justifyContent: 'center',
                tapBackgroundToDismiss: true, // dismisses LightBox on background taps (optional)
                backgroundBlur: "dark", // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
            },
            adjustSoftInput: "resize", // android only, adjust soft input, modes: 'nothing', 'pan', 'resize', 'unspecified' (optional, default 'unspecified')
        })
    },

    openContactModal: (navigator, title, onChange, multiple) => {
        navigator.showModal({
            screen: "/select-contact",
            title: title || '',
            navigatorButtons: _.cloneDeep(global.modalNavButtons),
            navigatorStyle: global.navbarStyle,
            passProps: {onChange, multiple}
        });
    },

    openSelect: (navigator, title, {items, renderRow, onChange, multiple, filterItem}) => {
        navigator.showModal({
            screen: "/select",
            title: title || '',
            navigatorButtons: _.cloneDeep(global.modalNavButtons),
            navigatorStyle: global.navbarStyle,
            passProps: {items, renderRow, onChange, multiple, filterItem}
        });
    },

    goAccount: function (navigator) {
        routeHelper.loginWall(navigator, {
            screen: "/about",
            title: "About",
            backButtonTitle: "",
            passProps: {}
        }, false)
    },

};
