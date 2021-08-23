import React, { useContext, useState } from 'react';
import { RecordStart, RecordStop } from '../../controllers/recordaudio';
import { UserContext } from './../../providers/index';
import Waves from './waves';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faTimes, faSave, faFileUpload } from "@fortawesome/free-solid-svg-icons";

import './index.css';
import './waves.css';

export default function Recorder () {
  const user = useContext(UserContext);
  const [recordInitialize, setRecordInitialize] = useState(false);

  return (
    <div className="recorder">
      <div className="recorder-animation">
        <Waves />
      </div>
      <div className="recorder-timer">
        <p className="time-spinner">
          <span>00</span>
          <span className="dots">:</span>
          <span>00</span>
        </p>
      </div>
      {
        recordInitialize ? (
          <div className="recorder-controllers">
            <button id="cancel_record" className="cnlBtn" title="Cancel recording">
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>
            <button id="stop_record" className="saveBtn" title="Save recording" onClick={RecordStop}>
              <FontAwesomeIcon icon={faSave} size="2x" />
            </button>
            <button id="upload_record" className="uploadBtn" title="Upload audio">
              <FontAwesomeIcon icon={faFileUpload} size="2x" />
            </button>
          </div>
        )
        :
        (
          <div className="recorder-controllers">
            <button id="start_record" className="strBtn" title="Start recording" onClick={RecordStart}>
              <FontAwesomeIcon icon={faMicrophone} size="2x" />
            </button>
          </div>
        )
      }
      { user ? '' : (
        <div className="guest-msg">
          <p>You can check now! Try your self!!!</p>
        </div>
      )}
      <div className="recorded-audio">
			  <audio id="recordedAudio" preload="true"></audio>
      </div>
    </div>
  );
}