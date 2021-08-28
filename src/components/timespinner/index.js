import React, { useState, useEffect } from 'react';
import { formatMinutes, formatSeconds } from './../../utils/time';
import store from './../../redux/store';

import './index.css';

const initialTime = {
  recordingMinutes: 0,
  recordingSeconds: 0
}

export default function TimeSpinner() {
  const isRecording = store.getState().isRecord;
  const [recorderState, setRecorderState] = useState(initialTime);

  useEffect (() => {
    const MAX_RECORDER_TIME = 5;
    let recordingInterval = null;
    if (isRecording) {
      recordingInterval = setInterval(() => {
        setRecorderState((prevState) => {
          if (
            prevState.recordingMinutes === MAX_RECORDER_TIME &&
            prevState.recordingSeconds === 0
          ) {
            clearInterval(recordingInterval);
            return prevState;
          }

          if (prevState.recordingSeconds >= 0 && prevState.recordingSeconds < 59)
            return {
              ...prevState,
              recordingSeconds: prevState.recordingSeconds + 1,
            };

          if (prevState.recordingSeconds === 59)
            return {
              ...prevState,
              recordingMinutes: prevState.recordingMinutes + 1,
              recordingSeconds: 0,
            };
        });
      }, 1000);
    }
    else {
      clearInterval(recordingInterval);
      setRecorderState({
        recordingMinutes: 0,
        recordingSeconds: 0,
      });
    }

    return () => clearInterval(recordingInterval);
  }, [isRecording])

  return (
    <div className="time-spinner">
      <span>{formatMinutes(recorderState.recordingMinutes)}</span>
      <span className="clock-colon">:</span>
      <span>{formatSeconds(recorderState.recordingSeconds)}</span>
    </div>
  )
}