import { Navigation } from 'react-native-navigation';
import Constants from '../common/utils/constants';
import API from './app/project/api/api';
import './app/project/globals';
import './app/routes';
import loadIcons from './load-icons';
import ReactNative from 'react-native';
import _store from '../common/store';

const DeviceWidth = ReactNative.Dimensions.get('window').width;

const store = _store();

const getUser = () => new Promise((resolve) => {
    API.getStoredToken().then((token) => {
        if (token) {
            return API.getCookie('user').then((user) => {
                const userData = user && JSON.parse(user);
                return store.dispatch(AppActions.startup(
                    { token, user: userData },
                    {
                        onSuccess: () => {
                            resolve(userData);
                        },
                        onError: () => {
                            resolve(null);
                        },
                    },
                ));
            });
        }
        resolve(null);
    }).catch(() => {
        resolve(null);
    });
});

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
    const screen = Constants.STORYBOOK ? routes.storybookScreen() : routes.homeScreen();
    // if (user && user.emailVerified) {
    //     screen = routes.dashboardScreen();
    // }
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
            ...routes.withStack(screen, {}, 'root'),
        },
    });
};

const prom = Promise.all([getUser(), Navigation.constants(), loadIcons()]);
Navigation.events().registerAppLaunchedListener(() => {
    prom.then(([user, constants]) => {
        Constants.statusBarHeight = constants.statusBarHeight;
        initialiseApp(user);
    });
});

// eslint-disable-next-line
console.disableYellowBox = true;
