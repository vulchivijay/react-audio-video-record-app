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
const googleProvider = new firebase.auth.GoogleAuthProvider();

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
export const uploadFile = (blob) => {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      const { email }  = user;
      const userFolder = email.replace("@gmail.com", "");
      const createdAt = Date.now();
      let ref;

      // [START storage_upload_metadata]
      // Create file metadata including the content type
      let metadata = {};

      if (blob.type.indexOf('audio/webm') !== -1) {
        ref = firebase.storage().ref().child(`voices/${userFolder}/${createdAt}.webm`);
        metadata = { contentType: 'audio/webm' }
      }
      if (blob.type.indexOf('audio/mp4') !== -1) {
        ref = firebase.storage().ref().child(`voices/${userFolder}/${createdAt}.mp4`);
        metadata = { contentType: 'audio/mp4'}
      }
    
      // [START storage_upload_blob]
      // 'file' comes from the Blob or File API
      ref.put(blob, metadata).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
      // [END storage_upload_blob]
    }
    else {
      console.log("Sign in required to store the file!");
    }
  });
}

// useEffect(() => {
//   if (user) {
//     const userFolder = user.email.replace("@gmail.com", "");
//     console.log("user: ", userFolder);
//     let storageRef = firebase.storage().ref();
//     let temp = [];
//     storageRef
//       .child(`voices/${userFolder}/`)
//       .listAll()
//       .then(function(res) {
//         res.items.forEach( (files, index) => {
//           files.getDownloadURL().then(url => {
//             temp.push(url);
//           });
//         });
//         // setAudioFiles([...temp]);
//         console.log("temp: ", temp);
//       })
//       .catch(function(error) {
//         console.log(error);
//       });
//     }
// }, []);


// Get audio files based on signed in user.
// export const getAudios = () => {
//   auth.onAuthStateChanged(async (user) => {
//     if (user) {
//       //1.
//       let storageRef = firebase.storage().ref();
//       //2.
//       storageRef
//         .listAll()
//         .then(function(res) {
//           console.log('res: ', res);
//           //3.
//           res.items.forEach(imageRef => {
//             imageRef.getDownloadURL().then(url => {
//               //4.
//               setImages(allImages => [...allImages, url]);
//             });
//           });
//         })
//         .catch(function(error) {
//           console.log(error);
//         });
//     }
//   });
// };

// Delete audio files based on signed in user.
// const deleteFromFirebase = url => {
//   //1.
//   let pictureRef = storage.refFromURL(url);
//   //2.
//   pictureRef
//     .delete()
//     .then(() => {
//       //3.
//       setImages(allImages.filter(image => image !== url));
//       alert('Picture is deleted successfully!');
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };