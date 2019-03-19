import { Navigation } from 'react-native-navigation';

const routes = {

    // The initial screen
    homeScreen: () => ({
        component: {
            name: '/',
            options: _.merge({}, global.navbarStyle, { topBar: { title: { text: 'Home' } } }),
        },
    }),

    // Standardised routing for logging out
    logout() {
        AppActions.logout();
        Navigation.setRoot({
            root: routes.homeScreen(),
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
    withStack: (screen, options) => ({
        stack: {
            children: [screen],
            options,
        },
    }),

    // Shorthand for wrapping a screen in a stack
    tab: (title, image) => ({
        text: title,
        icon: image,
        iconColor: styleVariables.tabIcon,
        textColor: styleVariables.tabText,
        selectedIconColor: styleVariables.tabIconActive,
        selectedTextColor: styleVariables.tabTextActive,
        disableIconTint: true,
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
Navigation.registerComponent('/', () => require('./screens/example/ExampleScreen'));
Navigation.registerComponent('/markup', () => require('./screens/__MarkupScreen__'));
Navigation.registerComponent('/select', () => require('./components/base/SelectModal'));
Navigation.registerComponent('/webmodal', () => require('./components/base/NativeWebModal'));
Navigation.registerComponent('/contact-select', () => require('./components/base/ContactSelectModal'));

// EXAMPLE Routes
Navigation.registerComponent('/example/lightbox', () => require('./screens/example/ExampleLightbox'));
Navigation.registerComponent('/example/about', () => require('./screens/example/AboutScreen'));
Navigation.registerComponent('/example/interactive', () => require('./screens/example/InteractiveScreen'));

Navigation.events().registerNavigationButtonPressedListener(({ buttonId, componentId }) => {
    if (buttonId === 'close') {
        Navigation.dismissModal(componentId);
    }
});

global.routes = routes;
module.exports = routes;
