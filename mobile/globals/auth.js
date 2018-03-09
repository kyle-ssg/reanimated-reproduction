import {FBLoginManager} from 'react-native-facebook-login';
import GoogleSignIn from 'react-native-google-sign-in';
import {auth} from 'react-native-twitter';

// // configure the manager

const Twitter = {
	login: () => {
		return auth(Project.twitter, Project.twitter.authUrl, undefined, (url)=> {
			routeHelper.openWebModal(url, "Login with Twitter")
		}).then(({accessToken, accessTokenSecret}) => {
			const tokens = {accessToken, accessTokenSecret};
			Navigation.dismissModal();
			AsyncStorage.setItem("auth-method", "twitter");
			return tokens;
		})
	},
	logout: ()=> {
		return Promise.resolve();
	}
}

const Facebook = {
	login: (permissions) => {
		return new Promise((resolve, reject) => {
			FBLoginManager.loginWithPermissions(permissions || ['email'], (error, data) => {
				if (!error) {
					AsyncStorage.setItem("auth-method", "facebook");
					resolve(data.credentials.token);
				} else {
					reject(error);
				}
			});
		});
	},
	logout: () => {
		return new Promise((resolve, reject) => {
			FBLoginManager.logout((error, data) => {
				if (!error) {
					resolve(true);
				} else {
					reject(error);
				}
			});
		});
	}
}

const Google = {
	configure: (options) => {
		GoogleSignIn.configure(options);
	},
	login: () => {
		return new Promise((resolve, reject) => {
			GoogleSignIn.signInPromise()
				.then((user) => {
					AsyncStorage.setItem("auth-method", "google")
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
			GoogleSignIn.signOutPromise()
				.then(() => {
					resolve(true);
				})
				.catch((err) => {
					reject(err);
				});
		});
	}
}

const logout = ()=> {
	return AsyncStorage.getItem("auth-method", (err, res)=> {
		switch (res) {
			case "facebook":
				res = Facebook.logout();
				break;
			case "google":
				res = Google.logout();
				break;
		}
		return res;
	})
}

const Auth = {Facebook, Google, Twitter, logout};

module.exports = Auth;


