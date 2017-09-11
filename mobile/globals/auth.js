// const { auth } = require('../common/project');
// import OAuthManager from 'react-native-oauth';
// import Project from '../common/project';
// const manager = new OAuthManager('appname')
// // configure the manager
// manager.configure(auth);
//
// import {FBLoginManager} from 'react-native-facebook-login';
// var GoogleSignIn = require('react-native-google-signin').GoogleSignin;
// var activeAuth = null;
// const Facebook = {
//     login: (permissions) => {
//         return new Promise((resolve, reject) => {
//             FBLoginManager.loginWithPermissions(permissions || ['email'], (error, data) => {
//                 setTimeout(() => { // hack: set timeout so that activity can catch up
//                     if (!error) {
//                         activeAuth = Facebook;
//                         resolve(data.credentials.token);
//                     } else {
//                         resolve(error);
//                     }
//                 }, 1000)
//             });
//         });
//     },
//     logout: () => {
//         return new Promise((resolve, reject) => {
//             FBLoginManager.logout((error, data) => {
//                 if (!error) {
//                     activeAuth = null;
//                     resolve(true);
//                 } else {
//                     reject(error);
//                 }
//             });
//         });
//     }
// }
// GoogleSignIn.configure({
//     iosClientId: Project.auth.google.ios, // only for iOS
// })
//     .then(() => {
//         // you can now call currentUserAsync()
//     });
//
// const Google = {
//     configure: (options) => {
//         GoogleSignIn.configure(options);
//     },
//     login: () => {
//         return new Promise((resolve, reject) => {
//             GoogleSignIn.signIn()
//                 .then((user) => {
//                     setTimeout(() => { // hack: set timeout so that activity can catch up
//                         if (!error) {
//                             activeAuth = Google;
//                             resolve(user.accessToken);
//                         } else {
//                             resolve(error);
//                         }
//                     }, 1000)
//                 })
//                 .catch((err) => {
//                     reject(err);
//                 })
//                 .done();
//         });
//     },
//     logout: () => {
//         return new Promise((resolve, reject) => {
//             GoogleSignIn.signOut()
//                 .then(() => {
//                     activeAuth = null;
//                     resolve(true);
//                 })
//                 .catch((err) => {
//                     reject(err);
//                 });
//         });
//     }
// }
//
// const Twitter = {
//     login: () => {
//         return manager.authorize('twitter')
//     },
//     logout: () => {
//         return manager.deauthorize('twitter')
//     },
// }
// module.exports = {
//     logout: () => {
//         if (activeAuth) {
//             return activeAuth.logout();
//         }
//         return Promise.resolve();
//     },
//     Twitter,
//     Facebook,
//     Google
// }