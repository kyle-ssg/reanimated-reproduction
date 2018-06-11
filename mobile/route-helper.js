var currentScreen = '/';
import AccountStore from './common-mobile/stores/account-store'
import {Navigation} from "react-native-navigation";


module.exports = {

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

    logout: (navigator) => {
        Auth.logout()
        AppActions.logout(null)
        navigator.resetTo({
            title: 'SSG Boilerplate',
            screen: '/', // unique ID registered with Navigation.registerScreen
            navigatorButtons: {
                leftButtons: []
            }, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        });
        Navigation.dismissAllModals();
    },

    goPurchase: function (navigator, id) {
        routeHelper.loginWall(navigator, {
            title: 'Your Purchase',
            screen: '/purchase', // unique ID registered with Navigation.registerScreen
            passProps: { id },
            navigatorButtons: {
                leftButtons: []
            }, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        })
    },

    goHome: function (navigator) {
        return AccountStore.isCoach() ? routeHelper.goNotImplemented(navigator) : routeHelper.goClient(navigator)
    },

    goClient: function (navigator) {
        routeHelper.loginWall(navigator, {
            title: 'Dashboard',
            screen: '/client', // unique ID registered with Navigation.registerScreen
            backButtonHidden: true,
            navigatorButtons: {
                leftButtons: []
            }, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        })
    },

    goNotImplemented: function (navigator) {
        routeHelper.loginWall(navigator, {
            title: 'Coming Soon',
            screen: '/coming-soon', // unique ID registered with Navigation.registerScreen
            navigatorButtons: {
                leftButtons: []
            }, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        })
    },

    //Login redirect if user is not logged in
    loginWall: (navigator, route, replace) => {
        if (AccountStore.getUser()) { // user already logged in
            if (replace) {
                navigator.resetTo(_.cloneDeep(route));
            } else {
                navigator.push(_.cloneDeep(route));
            }
        } else {
            navigator.showLightBox({
                screen: "/login",
                title: "Login",
                style: {
                    width: DeviceWidth,
                    height: DeviceHeight,
                    justifyContent: 'center',
                    tapBackgroundToDismiss: true, // dismisses LightBox on background taps (optional)
                    backgroundBlur: "dark", // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
                },
                navigatorButtons: _.cloneDeep(global.modalNavButtons),
                passProps: {
                    route,
                    onLogin: () => {
                        Navigation.dismissLightBox();
                        if (AccountStore.getUser()) {
                            if (replace) {
                                navigator.resetTo(_.cloneDeep(route));
                            } else {
                                navigator.push(_.cloneDeep(route));
                            }
                        }
                    }
                }
            });
        }
    },

    goAbout: (navigator) => {
        routeHelper.loginWall(navigator, {
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
            passProps: { uri, title }
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
            passProps: { onChange, multiple }
        });
    },

    openSelect: (navigator, title, { items, renderRow, onChange, multiple, filterItem }) => {
        navigator.showModal({
            screen: "/select",
            title: title || '',
            navigatorButtons: _.cloneDeep(global.modalNavButtons),
            navigatorStyle: global.navbarStyle,
            passProps: { items, renderRow, onChange, multiple, filterItem }
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
