import BottomSheet from 'react-native-bottomsheet';
import firebase from 'react-native-firebase';
const analytics = firebase.analytics();

import push from './push-notifications-api';




global.API = {


    log: function () {

    },

    trackEvent: function (data) {
        if (analytics) {
            const {event, ...rest} = data;
            if (!data) {
                console.error("Passed null event data")
            }
            console.info("track", data);
            if (!data || !data.category || !data.event) {
                console.error("Invalid event provided", data);
            }

            analytics.logEvent(event.toLowerCase().replace(/ /g, "_"), rest)

        }

    },
    trackPage: function (name) {
        if (analytics) {
            analytics.setCurrentScreen(name, name)
        }
    },
    share: (uri, message, title, subject, excludedActivityTypes, type) => {
        ReactNative.Share.share({message, title, url: uri}, {subject, excludedActivityTypes})
    },
    showOptions: (title, options, cancelButton = true, dark = true) => {
        return new Promise((resolve) => {
            cancelButton && options.push("Cancel");
            BottomSheet.showBottomSheetWithOptions({
                options,
                title,
                dark,
                cancelButtonIndex: cancelButton && options.length - 1,
            }, (value) => {
                resolve(value);
            });
        })
    },
    getContacts: (includePhotos) => {
        if (typeof Contacts == "undefined")
            alert("You need to link react-native-contacts to use this function");
        return Promise.resolve([]);
        includePhotos ?
            new Promise((resolve) => Contacts.getAll((error, contacts) => resolve({
                error,
                contacts: contacts && contacts.map(parseContact)
            })))
            : new Promise((resolve) => Contacts.getAllWithoutPhotos((error, contacts) => resolve({
                error,
                contacts: contacts && contacts.map(parseContact)
            })))
    },
    showUpload: (title, multiple, width, height, compressImageQuality = 0.8, onStart) => {
        return new Promise((resolve) => {
            API.showOptions(title, ["Camera", "Upload a Photo"]).then((i) => {
                if (typeof ImagePicker == "undefined")
                    alert("You need to link react-native-image-picker to use this function")
                //todo : handle multiple
                if (i == 0 || i == 1) {
                    const options = {
                        cropping: width || height ? true : false,
                        multiple,
                        width,
                        height,
                        compressImageQuality
                    };

                    const func = i ? ImagePicker.openPicker : ImagePicker.openCamera

                    return func(options)
                        .then(({path}) => {
                            onStart && onStart(path);

                            resolve({path})

                        });
                }
            })
        })
    },

    generateLink: (title, metadata, $fallback_url) => {
        return branch.createBranchUniversalObject("share", {
            title,
            metadata
        }).then((branchUniversalObject) => {
            let controlParams = {};
            return branchUniversalObject.generateShortUrl({}, controlParams)
                .then(({url}) => url);
        });
    },
    getInitialLink: (cb) => {
        initialLinkCb = cb;
        return initialLink ? cb(link) : null;
    },
    push
};


var linkCb = null;
var initialLinkCb = null;
var link = null;
var checkedInitialLink = null;
var initialLink = null;
import branch from 'react-native-branch';


branch.subscribe(({error, params}) => {
    if (error) {
        console.error('Error from Branch: ' + error)
        return
    }

    if (params['+clicked_branch_link']) {

        link = params;

        if (!checkedInitialLink) {
            initialLink = params;
            if (initialLinkCb)
                initialLinkCb(params)
        }

        if (linkCb) {
            linkCb(params)
        }

    }
    checkedInitialLink = true;
});