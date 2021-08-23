import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
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
    window.location.reload(false);
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

// File upload
export const uploadBlob = (blob) => {
  // auth.onAuthStateChanged(async (user) => {
  //   if (user) {
  //     const { email }  = user;
  //     const userFolder = email.replace("@gmail.com", "");
  //     const createdAt = Date.now();
  //     const ref = firebase.storage().ref().child(`voices/${userFolder}/${createdAt}.webm`);
    
  //     // [START storage_upload_metadata]
  //     // Create file metadata including the content type
  //     var metadata = {
  //       contentType: 'audio/webm',
  //     };
    
  //     // [START storage_upload_blob]
  //     // 'file' comes from the Blob or File API
  //     ref.put(blob, metadata).then((snapshot) => {
  //       console.log('Uploaded a blob or file!');
  //     });
  //     // [END storage_upload_blob]
  //   }
  //   else {
  //     console.log("Sign in required to store the file!");
  //   }
  // });
}