//openWebModal(navigator,'www.google.com','Google')
//push.init.then((token)=>{})


import FCM, {
    FCMEvent,
    RemoteNotificationResult,
    WillPresentNotificationResult,
    NotificationType
} from 'react-native-fcm';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'react-native-bottomsheet';
import branch from 'react-native-branch'

let linkCb = null;
let initialLinkCb = null;
let link = null;
let checkedInitialLink = null;
let initialLink = null;


var PushManager = class {
    static token = null;
    static onNotification = null;

    sendLocal = (title = '', body = '', params = {}) => (
        FCM.presentLocalNotification(Object.assign({}, params, {
            title,              // as FCM payload
            body,                    // as FCM payload (required)
        }))
    );

    getInitialNotification = () => FCM.getInitialNotification();
    subscribe = (topic) => {
        return FCM.subscribeToTopic(topic);
    }
    unsubscribe = (topic) => {
        return FCM.unsubscribeFromTopic(topic);
    }
    stop = () => {
        this.token = null;
        this.notificationListener && this.notificationListener.remove();
        this.notificationListener = null;
    } // remove old listener
    init = (onNotification, silent) => {

        if (onNotification) {
            this.notificationListener && this.notificationListener.remove(); // remove old listener
        }
        this.refreshTokenListener && this.refreshTokenListener.remove(); // remove old listener

        this.onNotification = onNotification;
        this.notificationListener = FCM.on(FCMEvent.Notification, (notification) => {
            //Callback if notification is valid

            if (notification._notificationType == "will_present_notification")
                return //these notifications are duplicate and pointless

            this.onNotification && this.onNotification(Object.assign({}, notification, {fromClick: notification._notificationType == "notification_response"}))
        });

        if (this.token) {
            return Promise.resolve(this.token);
        }

        return new Promise((resolve, reject) => {
            if (!silent) {
                FCM.requestPermissions(); // for iOS
            }

            FCM.getFCMToken().then(token => {
                if (token) {
                    this.token = token;
                    resolve(this.token);
                }
                // store fcm token in your server
            });


            this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, (token) => {
                if (token) {
                    this.token = token;
                    resolve(this.token);
                }
                // fcm token may not be available on first load, catch it here
            });
        });
    }
};
var push = new PushManager();

const Contacts = require('react-native-contacts');

const parseContact = (contact) => {
    let search = "";


    if (contact.givenName) {
        search += contact.givenName.toLowerCase();
    }

    if (contact.familyName) {
        search += contact.familyName.toLowerCase();
    }

    return Object.assign({}, contact, {search});
};

const Share = require('react-native-share');

var share = (uri, message, title, subject, excludedActivityTypes, type) => {
    Share.open({uri, message, title, subject, excludedActivityTypes, type})
};

var contacts = {
    getAll: (includePhotos) => includePhotos ?
        new Promise((resolve) => Contacts.getAll((error, contacts) => resolve({
            error,
            contacts: contacts && contacts.map(parseContact)
        })))
        : new Promise((resolve) => Contacts.getAllWithoutPhotos((error, contacts) => resolve({
        error,
        contacts: contacts && contacts.map(parseContact)
    })))
};

module.exports = {
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
    showUpload: (title, multiple, width, height, compressImageQuality = 0.8, onStart) => {
        return new Promise((resolve) => {
            API.showOptions(title, ["Camera", "Upload a Photo"]).then((i) => {
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

                            //todo: add cloudinary or uploadcare
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
    onLinkPressed: (cb) => {
        linkCb = cb;
    },
    push,
    share,
    contacts
};


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
