/**
 * Created by kylejohnson on 27/07/2016.
 */
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

GoogleSignin.configure({
  iosClientId: Project.googleIOS, // only for iOS
});

exports.signOut = function () {
  GoogleSignin.signOut()
};

exports.login = function (cb) {
  GoogleSignin.signIn()
    .then((user) => {
      cb(user.accessToken);
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
};

