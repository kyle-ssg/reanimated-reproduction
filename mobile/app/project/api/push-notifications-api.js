import firebase from 'react-native-firebase';

if (typeof firebase === 'undefined') {
    module.exports = null;
} else {
    const FCM = firebase.messaging();
    const Notifications = firebase.notifications();
    const PushManager = class {
        static token = null;

        static onNotification = null;


        getInitialNotification = () => Notifications.getInitialNotification();

        subscribe = (topic) => {
            API.log('PUSH_NOTIFICATIONS', `Subscribed to ${topic}`);
            return FCM.subscribeToTopic(topic);
        }

        unsubscribe = (topic) => {
            API.log('PUSH_NOTIFICATIONS', `Unsubscribed to ${topic}`);
            return FCM.unsubscribeFromTopic(topic);
        }

        stop = () => {
            this.token = null;
            this.notificationListener = null;
        }; // remove old listener

        init = (onNotification, silent) => {
            this.onNotification = onNotification;

            if (!this.notificationListener) {
                FCM.onMessage((notification) => {
                    if (this.notificationListener) {
                        this.notificationListener(notification);
                    }
                    notification.finish();
                });
            }

            this.notificationListener = (notification) => {
                // Callback if notification is valid

                if (notification._notificationType === 'will_present_notification') return; // these notifications are duplicate and pointless

                this.onNotification && this.onNotification(Object.assign({}, notification, { fromClick: notification._notificationType === 'notification_response' }));
            };

            if (this.token) {
                return Promise.resolve(this.token);
            }

            return new Promise((resolve, reject) => {
                const prom = Platform.OS === 'ios' && !silent ? FCM.requestPermission() : Promise.resolve();
                if (!silent) {
                    FCM.requestPermission(); // for iOS
                }

                prom.then(() => {
                    FCM.getToken().then((token) => {
                        if (token) {
                            this.token = token;
                            resolve(this.token);
                        }
                        // store fcm token in your server
                    });
                }).catch(e => reject(e));


                this.refreshTokenListener = FCM.onTokenRefresh((token) => {
                    if (token) {
                        this.token = token;
                        resolve(this.token);
                    }
                    // fcm token may not be available on first load, catch it here
                });
            });
        }
    };
    module.exports = new PushManager();
}
