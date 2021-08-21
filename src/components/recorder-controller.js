import { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faTimes, faSave } from "@fortawesome/free-solid-svg-icons";
import { formatMinutes, formatSeconds } from "./../utils/format-time";
import { UserContext } from './../providers/index';

import './../styles/recorder-controller.css';
import './../styles/waves.css';

export default function RecorderControls({ recorderState, handlers }) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;
  const user = useContext(UserContext);

  return (
    <div className="controls-container">
      <div className="recorder-waves">
        {initRecording && 
        <div id='bars'>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div> }
      </div>
      <div className="recorder-display">
        <div className="recording-time">
          <span>{formatMinutes(recordingMinutes)}</span>
          <span>:</span>
          <span>{formatSeconds(recordingSeconds)}</span>
        </div>
      </div>
      <div className="start-button-container">
        {initRecording && (
          <button className="cancel-button" title="Cancel recording" onClick={cancelRecording}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
        )}
        {initRecording ? (
          <button
            className="start-button"
            title="Save recording"
            disabled={recordingSeconds === 0}
            onClick={saveRecording}
          >
            <FontAwesomeIcon icon={faSave} size="2x" />
          </button>
        ) : (
          <button className="start-button" title="Start recording" onClick={startRecording}>
            <FontAwesomeIcon icon={faMicrophone} size="2x" />
          </button>
        )}
      </div>
      { user ? '' : <h1>You can check now.</h1> }
    </div>
  );
}