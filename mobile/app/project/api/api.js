import BottomSheet from 'react-native-bottomsheet';
// import firebase from 'react-native-firebase';
import { AsyncStorage } from 'react-native';
import push from './push-notifications-api';
import auth from './auth';

// eslint-disable-next-line
const analytics = typeof firebase === 'undefined' ? undefined : firebase.analytics();

global.API = {
    isMobile: () => true,
    ajaxHandler(type, e) {
        return { type, error: e.message };
    },
    log(...args) {
        // eslint-disable-next-line no-console
        console.log(...args);
    },
    loggedIn: () => null,
    logout: () => null,
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

            analytics.logEvent(event.toLowerCase().replace(/ /g, '_'), rest);
        }
    },
    trackPage(name) {
        if (analytics) {
            analytics.setCurrentScreen(name, name);
        }
    },
    setCookie(id, val) {
        AsyncStorage.setItem(id, val);
    },

    setStoredToken(val) {
        if (!val) {
            return AsyncStorage.removeItem('token');
        }
        AsyncStorage.setItem('token', val);
    },

    setStoredRefreshToken(val) {
        if (!val) {
            return AsyncStorage.removeItem('refreshToken');
        }
        AsyncStorage.setItem('refreshToken', val);
    },

    getStoredToken: () => {
        return AsyncStorage.getItem('token');
    },

    getStoredRefreshToken: () => {
        return AsyncStorage.getItem('refreshToken').then((res) => {
            return res && JSON.parse(res);
        });
    },

    getCookie: async (id) => {
        const res = await AsyncStorage.getItem(id);
        return res;
    },
    share: (uri, message, title, subject, excludedActivityTypes) => {
        ReactNative.Share.share({ message, title, url: uri }, { subject, excludedActivityTypes });
    },
    showOptions: (title, options, cancelButton = true, dark = false, destructiveOption) => new Promise((resolve) => {
        cancelButton && options.push('Cancel');
        BottomSheet.showBottomSheetWithOptions({
            options,
            title,
            dark,
            destructiveButtonIndex: destructiveOption && cancelButton ? options.length - 2 : options.length - 1,
            cancelButtonIndex: cancelButton && options.length - 1,
        }, (value) => {
            if (cancelButton && value === options.length - 1) return;
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
                alert('You need to link react-native-image-picker to use this function');
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
        return branch.createBranchUniversalObject('share', {
            title,
            customMetadata,
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

};

if (typeof branch !== 'undefined') {
    const linkCb = null;
    const initialLinkCb = null;
    // eslint-disable-next-line
    var link = null;
    let checkedInitialLink = null;
    // eslint-disable-next-line
    var initialLink = null;

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
            }

            if (linkCb) {
                linkCb(params);
            }
        }
        checkedInitialLink = true;
    });
}
