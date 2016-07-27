var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');
var FBLoginManager = require('NativeModules').FBLoginManager;

exports.signOut = function () {
    FBLoginManager.logout(function () {})
};

Auth.Facebook.login = function (callback) {
    return new Promise ((resolve, reject) => {
        FBLoginManager.loginWithPermissions(["email"], function (error, data) {
            if (!error) {
                    resolve(data.credentials.token);
            } else {
                reject(error);
            }
        });
    });
};
