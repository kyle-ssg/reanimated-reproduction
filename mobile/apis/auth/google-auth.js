/**
 * Created by kylejohnson on 27/07/2016.
 */
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

GoogleSignin.configure({
  iosClientId: Project.googleIOS, // only for iOS
});

exports.signOut = function () {
  GoogleSignin.signOut();
};

exports.login = function (cb) {
  return new Promise((resolve, reject)=> {
    GoogleSignin.signIn()
      .then((user) => {
        resolve(user.accessToken);
      })
      .catch((err) => {
        reject(err);
      })
      .done();
  });
};

