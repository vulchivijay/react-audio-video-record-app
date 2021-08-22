// import firebase from 'firebase/app';
import { useContext, useEffect } from 'react';
import { UserContext } from '../providers/index';
import useRecorder from './../hooks/useRecorder';

import RecorderController from './recorder-controller';
import RecordingsList from './recordings-list';

export default function RecordVoice() {  
  const { recorderState, ...handlers } = useRecorder();
  const { audio } = recorderState;
  const user = useContext(UserContext);

  useEffect(()=> {
    if (user) {
      // console.log(user);
    }
  }, [audio, user]);

  return (
    <div className="container record-wrapper">
      <RecorderController recorderState={recorderState} handlers={handlers} />
      <RecordingsList audio={audio} />
    </div>
  )
}


