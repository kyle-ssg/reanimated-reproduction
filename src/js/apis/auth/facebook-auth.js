require('../libs/fb');

//Auth.Facebook.login.then((token)=>{})
exports.login = function () {
    return new Promise((resolve) => {
        if (typeof FB != "undefined") {
            FB.login(function () {
                if (FB.getAccessToken()) {
                    resolve(FB.getAccessToken());
                }
            }, { scope: 'public_profile,email' });
            return true;
        } else {
            return false;
        }
    });
};