// import messaging from '@react-native-firebase/messaging';

if (typeof messaging === 'undefined') {
  console.log("Install @react-native-firebase/messaging ^7.4.2 for push notification support")
}
const PushManager = class {
  token = null;
  onNotification = null;
  notificationListener = null;
  refreshTokenListener = null;

  getInitialNotification = () => messaging().getInitialNotification();

  subscribe = (topic) => {
    API.log('PUSH_NOTIFICATIONS', `Subscribed to ${topic}`);
    return messaging().subscribeToTopic(topic);
  }

  unsubscribe = (topic) => {
    API.log('PUSH_NOTIFICATIONS', `Unsubscribed to ${topic}`);
    return messaging().unsubscribeFromTopic(topic);
  }

  stop = () => {
    this.token = null;
    this.notificationListener = null;
  }; // remove old listener

  init = async (onNotification, silent) => {
    this.onNotification = onNotification;

    if (!this.notificationListener) {
      messaging().onMessage((notification) => {
        if (this.notificationListener) {
          this.notificationListener(notification);
        }
      });
    }

    this.notificationListener = (notification) => {
      // Callback if notification is valid

      if (notification._notificationType === 'will_present_notification') return; // these notifications are duplicate and pointless

      this.onNotification && this.onNotification(Object.assign({}, notification, { fromClick: notification._notificationType === 'notification_response' }));
    };

    if (this.token) {
      return this.token
    }

    await Platform.select({
      ios: silent ? await messaging().requestPermission() : null,
      android: null
    });

    if (!silent) {
      await messaging().requestPermission(); // for iOS
    }

    const token = await messaging().getToken()
    this.refreshTokenListener = messaging().onTokenRefresh((token) => {
      if (token) {
        this.token = token;
      }
    });
    return token;
  }
};

export default new PushManager();
