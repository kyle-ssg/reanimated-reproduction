const PushNotification = require('react-native-push-notification');

const PushManager = class {
  token:null
  onNotification:null

  constructor (onNotification) {
    this.onNotification = onNotification;
    AsyncStorage.getItem('push-token', (err, res)=> {
      this.token = res;
    });
  }

  sendLocal = (title = '', message = '', params = {}) => { // see react-native-push-notification for extra params
    return new Promise((resolve, reject) => {
      this.configure()
        .then((token)=> {
          PushNotification.localNotification(Object.assign({}, params, {
            title,
            message
          }));
        });
    });
  }

  configure = () => {
    return new Promise((resolve, reject) => {
      if (!this.token) {
        PushNotification.configure({
          onRegister: (res) => {
            this.token = res.token;
            AsyncStorage.setItem('push-token', this.token);
            resolve(this.token);
          },
          permissions: {
            alert: true,
            badge: true,
            sound: true
          },
          onNotification: this.onNotification
        });

        resolve(this.token);
      } else {
        resolve(this.token);
      }
    });

  }
};

module.exports = PushManager;
