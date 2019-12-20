import { Navigation } from 'react-native-navigation';
import { RNNDrawer } from 'react-native-navigation-drawer-extension';
import { Provider } from 'react-redux';
import _store from '../../common/store';

const store = _store();


const routes = {

    // The initial screen
    homeScreen: () => ({
        component: {
            name: '/',
            options: _.merge({}, global.navbarStyle, { topBar: { title: { text: 'Home' } } }),
        },
    }),
    // The initial screen
    storybookScreen: () => ({
        component: {
            name: 'storybook',
            options: _.merge({}, global.navbarStyle, { topBar: { title: { text: 'Home' } } }),
        },
    }),

    // Standardised routing for logging out
    logout() {
        Navigation.setRoot({
            root: routes.dashboardScreen(),
        });
    },

    webModal: (uri, title) => routes.withStack({
        component: {
            name: '/webmodal',
            passProps: { uri },
            options: _.merge({}, global.navbarStyle, global.modalNavButtons, {
                topBar: { title: { text: title || '' } },
            }),
        },
    }),

    navEvents: {
        WILL_SHOW: 'willAppear',
        SHOW: 'didAppear',
        HIDE: 'didDisappear',
    },

    // Shorthand for wrapping a screen in a stack
    withStack: (screen, options = {}, id) => ({
        stack: {
            id,
            children: [screen],
            options,
        },
    }),

    // Shorthand for wrapping a screen in a stack
    tab: (title, image) => ({
        text: title,
        icon: image,
        iconColor: pallette.tabIcon,
        textColor: pallette.tabText,
        selectedIconColor: pallette.tabIconActive,
        selectedTextColor: pallette.tabTextActive,
        disableIconTint: true,
    }),


    // Initial tab upon logging in
    dashboardScreen: () => ({
        bottomTabs: {
            id: 'TABS',
            children: [
                routes.withStack(routes.homeScreen(), {
                    // eslint-disable-next-line
                    bottomTab: routes.tab("Home", global.iconsMap['md-home']),
                }),
                routes.withStack(routes.homeScreen(), {
                    // eslint-disable-next-line
                    bottomTab: routes.tab("Other", global.iconsMap['md-home']),
                }),
            ],
            options: {
                titleDisplayMode: 'alwaysShow',
                topBar: {
                    visible: false,
                },
            },
        },
    }),


    selectModal: (title, { items, renderRow, onChange, multiple, filterItem, autoclose }) => routes.withStack({
        component: { name: '/select',
            passProps: { items, renderRow, onChange, multiple, filterItem, autoclose },
            options: _.merge({}, global.navbarStyle, global.modalNavButtons, {
                topBar: {
                    drawBehind: false,
                    background: {
                        color: pallette.bodyBackground,
                        translucent: false,
                    },
                },
            }),
        },
    }),

    // A styleguide screen used to show off all components
    markupScreen: () => ({
        component: {
            name: '/markup',
            options: { ...global.navbarStyle },
        },
    }),

    exampleLightbox: () => ({
        component: {
            name: '/example/lightbox',
            options: {
                overlay: {
                    interceptTouchOutside: true,
                },
            },
        },
    }),

    aboutScreen: () => ({
        component: {
            name: '/example/about',
            options: _.merge({}, global.navbarStyle, {
                topBar: {
                    title: {
                        text: 'About',
                    },
                },
            }),
        },
    }),

    interactiveScreen: () => ({
        component: {
            name: '/example/interactive',
            options: _.merge({}, global.navbarStyle, {
                topBar: {
                    title: {
                        text: 'Interactables',
                    },
                },
            }),
        },
    }),

    contactSelectModal: (title, onChange) => ({
        component: {
            name: '/contact-select',
            passProps: { onChange },
            options: _.merge({}, global.navbarStyle, global.modalNavButtons, {
                topBar: {
                    title: {
                        text: title || '',
                    },
                },
            }),
        },
    }),
};

// BASE Routes
Navigation.registerComponentWithRedux('/', () => require('./screens/example/ExampleScreen'), Provider, store);
Navigation.registerComponentWithRedux('storybook', () => require('./screens/__StorybookScreen__'), Provider, store);

Navigation.registerComponent('/select', () => require('./components/base/SelectModal'));
Navigation.registerComponent('/webmodal', () => require('./components/base/NativeWebModal'));
Navigation.registerComponent('/contact-select', () => require('./components/base/ContactSelectModal'));
Navigation.registerComponent('loading-interstitial', () => require('./screens/LoadingInterstitial'));

// EXAMPLE Routes
Navigation.registerComponent('/example/lightbox', () => require('./screens/example/ExampleLightbox'));
Navigation.registerComponent('/example/about', () => require('./screens/example/AboutScreen'));
Navigation.registerComponent('/example/interactive', () => require('./screens/example/InteractiveScreen'));

// Example Side Drawer
Navigation.registerComponent("example-side-drawer", () => RNNDrawer.create(require('./components/SideDrawer')));

Navigation.events().registerNavigationButtonPressedListener(({ buttonId, componentId }) => {
    switch (buttonId) {
        case 'close':
            Navigation.dismissModal(componentId);
            break;
        case 'open-drawer':
            RNNDrawer.showDrawer({
                component: {
                    name: "example-side-drawer",
                    passProps: {
                        animationOpenTime: 300,
                        animationCloseTime: 300,
                        direction: "left",
                        dismissWhenTouchOutside: true,
                        fadeOpacity: 0.6,
                        drawerScreenWidth: "75%" || 445, // Use relative to screen '%' or absolute
                        drawerScreenHeight: "100%" || 700,
                        style: { // Styles the drawer container, supports any react-native style
                            backgroundColor: "red",
                        },
                        parentComponentId: componentId, // Custom prop, will be available in your custom drawer component props
                    },
                }
            });
            break;
        default:
            break;
    }
});

global.routes = routes;
module.exports = routes;
