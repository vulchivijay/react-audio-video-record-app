import firebase from 'firebase/app';
import { useContext, useEffect } from 'react';
import RecorderController from './components/recorder-controller';
import RecordingsList from './components/recordings-list';
import useRecorder from './hooks/useRecorder';
import { UserContext } from './providers/index';

import Header from './components/header';
import Footer from './components/footer';

import './styles/App.css';

function App() {
  const { recorderState, ...handlers } = useRecorder();
  let {audio} = recorderState;
  const user = useContext(UserContext);

  // audio = [
  //   "https://firebasestorage.googleapis.com/v0/b/record-voice-ac19c.appspot.com/o/voices%2Fvulchi.vijay%2F1629624583053.webm?alt=media&token=957eb3a8-df48-4d1f-9e57-7de1761fe19a",
  //   "https://firebasestorage.googleapis.com/v0/b/record-voice-ac19c.appspot.com/o/voices%2Fvulchi.vijay%2F1629628196091.webm?alt=media&token=8336ae31-3ed8-4d00-93d4-62962073bf39",
  //   "https://firebasestorage.googleapis.com/v0/b/record-voice-ac19c.appspot.com/o/voices%2Fvulchi.vijay%2F1629621224764.webm?alt=media&token=1dcfdfb5-017a-41fe-98fc-1dd22bf2c66f"
  // ]

  useEffect(()=> {
    if (user) {
      // const userFolder = user.email.replace("@gmail.com", "");
      // let storageRef = firebase.storage().ref();
      // let temp = [];
      // storageRef
      //   .child(`voices/${userFolder}/`)
      //   .listAll()
      //   .then(function(res) {
      //     res.items.forEach( (files, index) => {
      //       files.getDownloadURL().then(url => {
      //         temp.push(url);
      //       });
      //     });
      //     // audio = [...temp];
      //     console.log("temp: ", temp);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    }
  }, [user, audio]);

  return (
    <div className="App">
      <Header />
      <div className="container record-wrapper">
        <RecorderController recorderState={recorderState} handlers={handlers} />
        <RecordingsList audio={audio} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
