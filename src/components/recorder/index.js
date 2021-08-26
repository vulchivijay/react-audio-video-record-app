import React, { useContext } from 'react';
import { RecordStart, RecordStop, RecordUpload } from '../../controllers/recordaudio';
import TimeSpinner from './../timespinner/index';
import { UserContext } from './../../providers/index';
import store from './../../redux/store';
import Waves from './waves';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faVideo ,faFileUpload, faStopCircle } from "@fortawesome/free-solid-svg-icons";

import './index.css';

export default function Recorder () {
  const user = useContext(UserContext);
  const { isRecord, isRecordStopped } = store.getState();

  return (
    <div className="recorder">
      <div className="recorder-animation">
        {isRecord ? <Waves /> : ''}
      </div>
      <div className="recorder-timer">
        <TimeSpinner />
      </div>
      {
        isRecord ? (
          <div className="recorder-controllers">
            <button id="stop_record" className="stop-record" onClick={RecordStop}>
              <FontAwesomeIcon icon={faStopCircle} size="2x" color="white" />
            </button>
          </div>
        )
        :
        (
          <div className="recorder-controllers">
            <button id="start_video" className="start-video disable">
              <FontAwesomeIcon icon={faVideo} size="2x" />
            </button>
            <button id="start_record" className="start-record" onClick={RecordStart}>
              <FontAwesomeIcon icon={faMicrophone} size="2x" color="white" />
            </button>
            {
              user && isRecordStopped && (
                <button id="upload_record" className="file-upload" onClick={RecordUpload}>
                  <FontAwesomeIcon icon={faFileUpload} size="2x" color="white" />
                </button>
              )
            }
          </div>
        )
      }
      { user ? '' : (
        <div className="guest-msg">
          <p>You can check now! Try your self!!!</p>
        </div>
      )}
      <div className="recorded-audio">
			  <span id="recordPreview"></span><audio id="recordedAudio" preload="true"></audio>
      </div>
    </div>
  );
}


