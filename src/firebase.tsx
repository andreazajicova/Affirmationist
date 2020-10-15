import firebase from 'firebase/app';
// const firebaseui = require('firebaseui');
require('dotenv').config();

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
// };

// Initialize the FirebaseUI Widget using Firebase.
// const ui = new firebaseui.auth.AuthUI(firebase.auth());

// const uiConfig = {
//     signInFlow: 'popup',
//     signInOptions: [
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID
//     ],
//     callbacks: {
//         signInSuccess: () => false
//     }
// }

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

export default firebase;