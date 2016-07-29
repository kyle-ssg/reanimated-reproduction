/**
 * Created by kylejohnson on 25/07/2016.
 */
import Auth from '../apis/auth/auth';

const FireAuth = class {
    user:null
    profile:null
    onLogin:null
    onUserChange:null
    onLogout:null
    onError:null

    init = (onLogin, onUserChange, onLogout, onEmailVerified, onError) => {
        this.onUserChange = onUserChange;
        this.onLogout = onLogout;
        this.onEmailVerified = onEmailVerified;
        this.onLogin = onLogin;
        this.onError = onError;

        firebase.auth().onAuthStateChanged((user)=> {

            if (user) {
                //determine if user needs to verify email
                var emailVerified = user.providerData[0].providerId != 'password' || user.emailVerified;

                //upsert profile information
                var profileRef = firebase.database().ref(`profiles/${user.uid}`);
                profileRef.update({ emailVerified: emailVerified, email: user.email });

                profileRef.on('value', (profile)=> {
                    const val = profile.val();

                    //email become verified in session
                    if (val.emailVerified && (this.profile && !this.profile.val().emailVerified)) {
                        this.onEmailVerified && this.onEmailVerified();
                    }

                    if (!this.user) {
                        this.onLogin(user, val); //on login
                    } else if (val) {
                        this.onUserChange && this.onUserChange(user, val); //on updated
                    }

                    this.profile = profile; //store profile
                    this.user = user; //store user
                });

            } else {
                this.profile = null;
                this.user = null; //clear user and logout
                this.onLogout && this.onLogout();
            }

        });
    }

    login = (email, password) => (
       firebase.auth().signInWithEmailAndPassword(email, password)
    )

    register = (username, password, data) => {
        firebase.auth().createUserWithEmailAndPassword(username, password)
            .then((user)=> {
                user.sendEmailVerification();
                if (data) {
                    this.update(user, data);
                }
            })
            .catch(this.onError)

    }

    resendVerification = () => {
        this.user.sendEmailVerification();
    }

    facebookLogin = (data) => {
        Auth.Facebook.login()
            .then((token) => (
                firebase.auth()
                    .signInWithCredential(firebase.auth.FacebookAuthProvider.credential(token))
                    .then((user)=> {
                        if (data) {
                            this.update(user, data);
                        }
                    })
            ))

            .catch(this.onError);
    }

    googleLogin = (data) => {
        Auth.Google.login()
            .then((token) => (
                firebase.auth()
                    .signInWithCredential(firebase.auth.GoogleAuthProvider.credential(null, token))
                    .then((user)=> {
                        if (data) {
                            this.update(user, data);
                        }
                    })
            ))
            .catch(this.onError);
    }

    logout = () => {
        firebase.auth().signOut();
    }

    update = (data) => {
        var profileRef = firebase.database().ref(`profiles/${this.user.uid}`);
        return profileRef.update(data);
    }

    resetPassword = (email) => (
        firebase.auth().sendPasswordResetEmail(email)
    )

    updatePassword = (password) => (
        this.user.updatePassword(password)
    )

    linkWithGoogle = () => {

    }

    linkWithFacebook = () => {

    }

    linkWithEmail = () => {

    }
};

module.exports = new FireAuth();
