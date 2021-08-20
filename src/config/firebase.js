import firebase from 'firebase/app';
import "firebase/auth";
import dotenv from 'dotenv';
dotenv.config();

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user);
  }).catch((error) => {
    console.log(error.message);
  })
}

export const logOut = () => {
  auth.signOut().then(()=> {
    console.log('logged out');
    window.location.reload(false);
  }).catch((error) => {
    console.log(error.message);
  })
}
