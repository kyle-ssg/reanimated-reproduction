import BottomSheet from 'react-native-bottomsheet';
import firebase from 'react-native-firebase';

import branch from 'react-native-branch';
import push from './push-notifications-api';

const analytics = firebase.analytics();


global.API = {


    log() {

    },

    trackEvent(data) {
        if (analytics) {
            const { event, ...rest } = data;
            if (!data) {
                console.error('Passed null event data');
            }
            console.info('track', data);
            if (!data || !data.category || !data.event) {
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
    share: (uri, message, title, subject, excludedActivityTypes, type) => {
        ReactNative.Share.share({ message, title, url: uri }, { subject, excludedActivityTypes });
    },
    showOptions: (title, options, cancelButton = true, dark = true) => new Promise((resolve) => {
        cancelButton && options.push('Cancel');
        BottomSheet.showBottomSheetWithOptions({
            options,
            title,
            dark,
            cancelButtonIndex: cancelButton && options.length - 1,
        }, (value) => {
            resolve(value);
        });
    }),
    getContacts: (includePhotos) => {
        if (typeof Contacts === 'undefined') alert('You need to link react-native-contacts to use this function');
        return Promise.resolve([]);
        includePhotos
            ? new Promise(resolve => Contacts.getAll((error, contacts) => resolve({
                error,
                contacts: contacts && contacts.map(parseContact),
            })))
            : new Promise(resolve => Contacts.getAllWithoutPhotos((error, contacts) => resolve({
                error,
                contacts: contacts && contacts.map(parseContact),
            })));
    },
    showUpload: (title, multiple, width, height, compressImageQuality = 0.8, onStart) => new Promise((resolve) => {
        API.showOptions(title, ['Camera', 'Upload a Photo']).then((i) => {
            if (typeof ImagePicker === 'undefined') alert('You need to link react-native-image-picker to use this function');
            // todo : handle multiple
            if (i == 0 || i == 1) {
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

    generateLink: (title, metadata, $fallback_url) => branch.createBranchUniversalObject('share', {
        title,
        metadata,
    }).then((branchUniversalObject) => {
        const controlParams = {};
        return branchUniversalObject.generateShortUrl({}, controlParams)
            .then(({ url }) => url);
    }),
    getInitialLink: (cb) => {
        initialLinkCb = cb;
        return initialLink ? cb(link) : null;
    },
    push,
};


const linkCb = null;
var initialLinkCb = null;
var link = null;
let checkedInitialLink = null;
var initialLink = null;


branch.subscribe(({ error, params }) => {
    if (error) {
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