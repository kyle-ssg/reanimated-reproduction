import { Navigation } from 'react-native-navigation';
import './app/project/globals';
import './app/routes';
import loadIcons from './load-icons';

// const getUser = () => new Promise((resolve) => {
//     setTimeout(
//         () => {
//             AsyncStorage.getItem('user', (err, user) => {
//                 // Load the user from async storage
//                 resolve(user && JSON.parse(user));
//             });
//         },
//         Constants.simulate.NEW_USER ? 500 : 0,
//     );
// });

const initialiseApp = () => {
    global.modalNavButtons = {
        topBar: {
            leftButtons: [],
            rightButtons: [
                {
                    icon: global.iconsMap['md-close'], // for icon button, provide the local image asset name
                    id: 'close', // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                },
            ],
        },
    };

    // Determine the initial route\
    const screen = routes.homeScreen();

    const defaultOptions = {
        topBar: {
            elevation: 0,
            backButton: {
                visible: false,
                color: pallette.navBarIcon,
                text: 'Back',
            },
        },
    };
    const duration = 400;
    // const duration = null;
    const fromFade = 0;
    const toFade = 1;
    const fromX = DeviceWidth;
    const toX = 0;

    if (Platform.OS === 'android') {
        defaultOptions._animations = {};
        defaultOptions.animations = {
            push: {
                // waitForRender: true,
                content: {
                    x: {
                        from: fromX,
                        to: toX,
                        interpolation: 'decelerate',
                    },
                    alpha: {
                        from: fromFade,
                        to: toFade,
                        duration,
                        interpolation: 'decelerate',
                    },
                },
            },
            pop: {
                topBar: {
                    alpha: {
                        from: toFade,
                        to: fromFade,
                    },
                },
                content: {
                    x: {
                        from: toX,
                        to: fromX * 2.5,
                        duration,
                        interpolation: 'accelerateDecelerate',
                    },
                    alpha: {
                        from: toFade,
                        to: fromFade,
                        duration,
                        interpolation: 'accelerateDecelerate',
                    },
                },
            },
        };
    }
    Navigation.setDefaultOptions(defaultOptions);

    Navigation.setRoot({
        root: {
            ...routes.withStack(screen),
        },
    });
};


const prom = Promise.all([loadIcons()]);
Navigation.events().registerAppLaunchedListener(() => {
    prom.then(() => {
        initialiseApp(null);
    });
});

// eslint-disable-next-line
console.disableYellowBox = true;
