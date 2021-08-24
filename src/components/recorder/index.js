import React, { useContext } from 'react';
import { RecordStart, RecordStop } from '../../controllers/recordaudio';
import { UserContext } from './../../providers/index';
// import Waves from './waves';
import TimeSpinner from './../timespinner/index';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faTimes, faSave, faFileUpload } from "@fortawesome/free-solid-svg-icons";

import './index.css';
import './waves.css';

export default function Recorder () {
  const user = useContext(UserContext);

  return (
    <div className="recorder">
      <div className="recorder-animation">
        {/* <Waves /> */}
      </div>
      <div className="recorder-timer">
        <TimeSpinner />
      </div>
      {
        false ? (
          <div className="recorder-controllers">
            <button id="cancel_record" >
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </button>
            <button id="stop_record" onClick={RecordStop}>
              <FontAwesomeIcon icon={faSave} size="2x" />
            </button>
            <button id="upload_record" >
              <FontAwesomeIcon icon={faFileUpload} size="2x" />
            </button>
          </div>
        )
        :
        (
          <div className="recorder-controllers">
            <button id="start_record" onClick={RecordStart}>
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