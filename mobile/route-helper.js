var currentScreen = '/';
import AccountStore from './common/stores/account-store'
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

        AppActions.logout();
        SecuredStorage.clear().then(() => {
            if (AccountStore.getUser()) {
                if (currentScreen !== 'login') {
                    navigator.resetTo({
                        title: 'PatientView',
                        screen: '/login', // unique ID registered with Navigation.registerScreen
                        navigatorButtons: {
                            leftButtons: []
                        }, // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
                    });
                }
            }
        })

        setTimeout(() => {
            Navigation.dismissAllModals();
        }, 2000);


    },

    //Login redirect if user is not logged in
    loginWall: (navigator, route, replace) => {
        if (AccountStore.getUser()) { // user already logged in
            if (replace) {
                navigator.resetTo({
					screen: "/about",
					title: "About",
					backButtonTitle: "",
					passProps: {}
				});
            } else {
                navigator.push({
					screen: "/about",
					title: "About",
					backButtonTitle: "",
					passProps: {}
				});
            }
        } else {
            navigator.showModal({
                screen: "/login",
                title: "Login",
                passProps: {
                    route,
                    onLogin: () => {
                        navigator.dismissModal();
                        setTimeout(()=>{
                            if (AccountStore.getUser()) {
                                if (replace) {
                                    navigator.resetTo(route);
                                } else {
                                    navigator.push(route);
                                }
                            }
                        },600)
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

    openWebModal: (navigator, uri, title) => {
        navigator.showModal({
            screen: "/webmodal",
            title: title || '',
            navigatorButtons: _.cloneDeep(global.modalNavButtons),
            navigatorStyle: global.navbarStyle,
            passProps: {uri, title}
        });
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
