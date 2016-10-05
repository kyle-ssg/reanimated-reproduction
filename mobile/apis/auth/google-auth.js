import { GoogleSignin } from 'react-native-google-signin';

const Google = {
  configure: () => {
    GoogleSignin.configure({
      iosClientId: Project.google.clientID
    });
  },
  login: () => {
    return new Promise((resolve, reject) => {
      GoogleSignin.signIn()
        .then((user) => {
          resolve(user.accessToken);
        })
        .catch((err) => {
          reject(err);
        })
        .done();
    });
  },
  logout: () => {
    return new Promise((resolve, reject) => {
      GoogleSignin.signOut()
        .then(() => {
          resolve(true);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default Google;
