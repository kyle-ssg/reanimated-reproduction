import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCC-BTYL-DuOMt7hrK18Q-PhOM0FVpgpd8",
    authDomain: "project-4251246165915577329.firebaseapp.com",
    databaseURL: "https://project-4251246165915577329.firebaseio.com",
    storageBucket: "project-4251246165915577329.appspot.com",
};

firebase.initializeApp(config);
window.firebase = firebase;

import FireAuth from './fire-auth'

