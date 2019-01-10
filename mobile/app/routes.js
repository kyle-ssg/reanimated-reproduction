import { Navigation } from 'react-native-navigation';

module.exports = {
    navEvents: {
        SHOW: 'didAppear',
        HIDE: 'didDisappear',
    },

    closeDrawer: (navigator) => {
        navigator.toggleDrawer({
            to: 'closed',
            side: 'right',
            animated: true,
        });
    },

    openDrawer: (navigator) => {
        navigator.toggleDrawer({
            side: 'right',
            to: 'open',
            animated: true,
        });
    },

    homeScreen: () => ({
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
                    id: 'side-menu', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                },
            ],
        },
    }),

    // Global handling for pages - can plug into analytics / deep linmking
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
                // Handle deep linking
                routes[event.link] && navigator.push(routes[event.link]());
            } else if (event.id == 'side-menu') {
                // Handle open drawer
                navigator.toggleDrawer({
                    side: 'right',
                    animated: true,
                });
            }

            cb && cb(event);
        });
    },

    aboutScreen: () => (
        {
            screen: '/about',
            title: 'About',
            backButtonTitle: '',
            passProps: {},
        }
    ),

    webScreen: (uri, title) => ({
        screen: '/webmodal',
        title: title || '',
        navigatorButtons: _.cloneDeep(global.modalNavButtons),
        navigatorStyle: global.navbarStyle,
        passProps: { uri, title },
    }),

    exampleLightbox: () => ({
        screen: '/examples/lightbox', // unique ID registered with Navigation.registerScreen
        style: {
            width: DeviceWidth,
            height: DeviceHeight,
            justifyContent: 'center',
            tapBackgroundToDismiss: true, // dismisses LightBox on background taps (optional)
            backgroundBlur: 'dark', // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
        },
        adjustSoftInput: 'resize', // android only, adjust soft input, modes: 'nothing', 'pan', 'resize', 'unspecified' (optional, default 'unspecified')
    }),

    contactScreen: (title, onChange, multiple) => ({
        screen: '/select-contact',
        title: title || '',
        navigatorButtons: _.cloneDeep(global.modalNavButtons),
        navigatorStyle: global.navbarStyle,
        passProps: { onChange, multiple },
    }),

    selectScreen: (title, { items, renderRow, onChange, multiple, filterItem }) => ({
        screen: '/select',
        title: title || '',
        navigatorButtons: _.cloneDeep(global.modalNavButtons),
        navigatorStyle: global.navbarStyle,
        passProps: { items, renderRow, onChange, multiple, filterItem },
    }),

};

// BASE Routes
Navigation.registerComponent('/', () => require('./screens/example/ExampleScreen'));
Navigation.registerComponent('/webmodal', () => require('./components/base/NativeWebModal'));
Navigation.registerComponent('/select', () => require('./components/base/SelectModal'));
Navigation.registerComponent('/select-contact', () => require('./components/base/ContactSelectModal'));

// Example routes
Navigation.registerComponent('/about', () => require('./screens/example/AboutPage'));
Navigation.registerComponent('/examples/interactive', () => require('./screens/example/InteractivePage'));
Navigation.registerComponent('/examples/lightbox', () => require('./screens/example/ExampleLightbox'));

// Components
Navigation.registerComponent('side-menu', () => require('./components/SideMenu'));
