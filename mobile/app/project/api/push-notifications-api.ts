import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging'

if (typeof messaging === 'undefined') {
  console.log(
    'Install @react-native-firebase/messaging ^7.4.2 for push notification support',
  )
}
const PushManager = class {
  token = null
  onNotification = null
  refreshTokenListener = null

  getInitialNotification = () => messaging().getInitialNotification()

  subscribe = (topic) => {
    API.log('PUSH_NOTIFICATIONS', `Subscribed to ${topic}`)
    return messaging().subscribeToTopic(topic)
  }

  unsubscribe = (topic) => {
    API.log('PUSH_NOTIFICATIONS', `Unsubscribed to ${topic}`)
    return messaging().unsubscribeFromTopic(topic)
  }

  stop = () => {
    this.token = null
    this.notificationListener = null
  } // remove old listener

  notificationListener = (
    notification: FirebaseMessagingTypes.RemoteMessage,
    foreground?: boolean,
  ) => {
    // Callback if notification is valid
    if (notification._notificationType === 'will_present_notification') return // these notifications are duplicate and pointless
    this.onNotification && this.onNotification(notification, foreground)
  }

  init = async (onNotification, silent) => {
    this.onNotification = onNotification
    messaging().onNotificationOpenedApp((notification) => {
      if (this.notificationListener) {
        this.notificationListener(notification)
      }
    })
    messaging().onMessage((notification) => {
      if (this.notificationListener) {
        this.notificationListener(notification, true)
      }
    })

    messaging()
      .getInitialNotification()
      .then((res) => {
        if (res) {
          this.notificationListener(res)
        }
      })
    if (this.token) {
      return this.token
    }

    if (!silent) {
      const authStatus = await messaging().requestPermission()
    }

    const token = await messaging().getToken()
    this.refreshTokenListener = messaging().onTokenRefresh((token) => {
      if (token) {
        this.token = token
      }
    })
    return token
  }
}

export default new PushManager()
