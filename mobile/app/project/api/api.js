import BottomSheet from 'react-native-bottomsheet';
// import firebase from 'react-native-firebase';
import errorHandler from 'common/utils/errorHandler';

import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-crop-picker';
import branch from 'react-native-branch';
import ReactNative from 'react-native';
import { getStoreDangerous } from '../../../common-mobile/store';
import storage from './async-storage-api';

import push from './push-notifications-api';
import auth from './auth';


const analytics = typeof firebase === 'undefined' ? undefined : firebase.analytics();

global.API = {
    isMobile: () => true,
    ajaxHandler(type, e) {
        return { type, error: errorHandler(e) };
    },
    log(...args) {
        // eslint-disable-next-line no-console
        console.log(...args);
    },
    loggedIn: () => null,
    logout: () => {
        const user = getStoreDangerous().getState().user;
        if (user) {
            // unsubscribe from push notifications etc
        }
        if (getStoreDangerous().getState().user) {
            getStoreDangerous().dispatch(AppActions.logout({
                onSuccess: () => {
                    routes.logout();
                    Alert.alert('Logged out', 'You have been logged out');
                },
            }));
        }
    },
    logoutComplete: () => {
        if (getStoreDangerous().getState().user) {
            getStoreDangerous().dispatch(AppActions.logout());
        }
    },
    trackEvent(data) {
        if (analytics) {
            const { event, ...rest } = data;
            if (!data) {
                // eslint-disable-next-line no-console
                console.error('Passed null event data');
            }
            // eslint-disable-next-line no-console
            console.info('track', data);
            if (!data || !data.category || !data.event) {
                // eslint-disable-next-line no-console
                console.error('Invalid event provided', data);
            }

            analytics()
                .logEvent(event.toLowerCase()
                    .replace(/ /g, '_'), rest);
        }
    },
    trackPage(name) {
        if (analytics) {
            analytics().setCurrentScreen(name, name);
        }
    },
    setCookie(id, val) {
        if (!val) {
            return API.storage.removeItem(id);
        }
        return API.storage.setItem(id, val);
    },

    setStoredToken(val) {
        if (!val) {
            return API.storage.removeItem('token');
        }
        API.storage.setItem('token', val);
    },

    setStoredRefreshToken(val) {
        if (!val) {
            return API.storage.removeItem('refreshToken');
        }
        API.storage.setItem('refreshToken', val);
    },

    getStoredToken: () => {
        return API.storage.getItem('token');
    },

    getStoredRefreshToken: () => {
        return API.storage.getItem('refreshToken').then((res) => {
            return res && JSON.parse(res);
        });
    },

    getCookie: async (id) => {
        const res = await API.storage.getItem(id);
        return res;
    },
    share: (uri, message, title, subject, excludedActivityTypes) => {
        ReactNative.Share.share({ message, title, url: uri }, { subject, excludedActivityTypes });
    },
    showOptions: (title, _options, cancelButton = true, dark = false, destructiveOption, resolveCancel) => new Promise((resolve) => {
        const options = cancelButton ? _options.concat(['Cancel']) : _options;
        BottomSheet.showBottomSheetWithOptions({
            options,
            title,
            dark,
            destructiveButtonIndex: destructiveOption && cancelButton ? options.length - 2 : options.length - 1,
            cancelButtonIndex: cancelButton && options.length - 1,
        }, (value) => {
            if (cancelButton && value === options.length - 1) {
                if (resolveCancel) resolve(null);
                return;
            }
            resolve(value);
        });
    }),
    getContacts: () => {
        if (typeof Contacts === 'undefined') {
            return Promise.reject(new Error('You need to link react-native-contacts to use this function'));
        }
        return Promise.resolve([]);
        // includePhotos
        //     ? new Promise(resolve => Contacts.getAll((error, contacts) => resolve({
        //         error,
        //         contacts: contacts && contacts.map(parseContact),
        //     })))
        //     : new Promise(resolve => Contacts.getAllWithoutPhotos((error, contacts) => resolve({
        //         error,
        //         contacts: contacts && contacts.map(parseContact),
        //     })));
    },
    showUpload: (title, multiple, width, height, compressImageQuality = 0.8, onStart) => new Promise((resolve) => {
        API.showOptions(title, ['Camera', 'Upload a Photo']).then((i) => {
            if (typeof ImagePicker === 'undefined') {
                // eslint-disable-next-line
                alert('You need to link react-native-image-crop-picker to use this function');
                return;
            }
            // todo : handle multiple
            if (i === 0 || i === 1) {
                const options = {
                    cropping: !!(width || height),
                    multiple,
                    width,
                    height,
                    compressImageQuality,
                };

                // eslint-disable-next-line no-undef
                const func = i ? ImagePicker.openPicker : ImagePicker.openCamera;

                return func(options)
                    .then(({ path }) => {
                        onStart && onStart(path);

                        resolve({ path });
                    });
            }
        });
    }),

    generateLink: (title, customMetadata) => {
        if (typeof branch === 'undefined') {
            // eslint-disable-next-line
            alert('You need to link react-native-branch to use this function');
            return Promise.reject();
        }
        // eslint-disable-next-line no-undef
        return branch.createBranchUniversalObject('share', {
            title,
            contentMetadata: {
                customMetadata,
            },
        }).then((branchUniversalObject) => {
            const controlParams = {};
            return branchUniversalObject.generateShortUrl({}, controlParams)
                .then(({ url }) => url);
        });
    },
    getInitialLink: (cb) => {
        // eslint-disable-next-line
        initialLinkCb = cb;
        // eslint-disable-next-line
        return initialLink ? cb(link) : null;
    },
    push,
    auth,
    storage,
};

if (typeof branch !== 'undefined') {
    let linkCb = null;
    // eslint-disable-next-line
    var initialLinkCb = null;
    // eslint-disable-next-line
    var link = null;
    // eslint-disable-next-line
    var checkedInitialLink = null;
    // eslint-disable-next-line
    var initialLink = null;

    API.onLink = cb => linkCb = cb;
    branch.subscribe(({ error, params }) => {
        if (error) {
            // eslint-disable-next-line no-console
            console.error(`Error from Branch: ${error}`);
            return;
        }

        if (params['+clicked_branch_link']) {
            link = params;

            if (!checkedInitialLink) {
                initialLink = params;
                if (initialLinkCb) initialLinkCb(params);
            } else if (linkCb) {
                linkCb(params);
            }
        }
        checkedInitialLink = true;
    });
}
