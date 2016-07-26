/**
 * Created by kylejohnson on 25/07/2016.
 */
import Auth from '../auth/auth';

const FireAuth = class {
    user:null
    onLogin:null
    onUserChange:null
    onLogout:null
    onError:null

    init = (onLogin, onUserChange, onLogout, onError) => {
        this.onUserChange = onUserChange;
        this.onLogout = onLogout;
        this.onLogin = onLogin;
        this.onError = onError;

        firebase.auth().onAuthStateChanged((user)=> {

            if (user) {
                //determine if user needs to verify email
                var emailVerified = user.providerData[0].providerId != 'password' || user.emailVerified;

                //upsert profile information
                var profileRef = firebase.database().ref(`profiles/${user.uid}`);
                profileRef.update({ emailVerified: emailVerified, email: user.email });

                //listen to profile changed
                profileRef.on('value', (profile)=> {
                    const val = profile.val();
                    if (!this.user) {
                        this.onLogin(user, val); //on login
                    } else if (val) {
                        this.onUserChange(user, val); //on updated
                    }
                    this.user = user; //store user
                });

            } else {
                this.user = null; //clear user and logout
                onLogout();
            }

        });
    }

    login = (email, password) => (
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(this.onError)
    )

    facebookLogin = () => {
        Auth.Facebook.login()
            .then((token) => (
                firebase.auth()
                    .signInWithCredential(firebase.auth.FacebookAuthProvider.credential(token))
            ))
            .catch(this.onError);
    }

    googleLogin = () => {
        Auth.Google.login()
            .then((token) => (
                firebase.auth()
                    .signInWithCredential(firebase.auth.GoogleAuthProvider.credential(null, token))
            ))
            .catch(this.onError);
    }

    register = (username, password) => (
        firebase.auth().createUserWithEmailAndPassword(username, password)
            .then((user)=> {
                user.sendEmailVerification();
            })
            .catch(this.onError)
    )

    logout = () => {
        firebase.auth().signOut();
    }

    resendVerification = () => {
        this.user.sendEmailVerification();
    }

    update (user, data) {
        var profileRef = firebase.database().ref(`profiles/${user.uid}`);
        profileRef.update(data);
    }

    resetPassword (email) {
        return firebase.auth().sendPasswordResetEmail(email);
    }

};

module.exports = new FireAuth();
