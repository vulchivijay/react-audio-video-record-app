import React, { useContext } from 'react';
import { RecordStart, RecordStop, RecordCancel, RecordUpload } from '../../controllers/recordaudio';
import { UserContext } from './../../providers/index';
import TimeSpinner from './../timespinner/index';
import store from './../../redux/store';
import Waves from './waves';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faVideo ,faFileUpload, faStopCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import './index.css';
import './waves.css';

export default function Recorder () {
  const user = useContext(UserContext);
  const { isRecord, isRecordStopped } = store.getState();
  console.log(isRecord, isRecordStopped);
  return (
    <div className="recorder">
      <div className="recorder-animation">
        <Waves />
      </div>
      <div className="recorder-timer">
        <TimeSpinner />
      </div>
      {
        isRecord || isRecordStopped ? (
          <div className="recorder-controllers">
            {
              isRecordStopped ?
              (<React.Fragment><button id="cancel_record" onClick={RecordCancel}>
                  <FontAwesomeIcon icon={faTrashAlt} size="2x" />
                </button>
                <button id="upload_record" onClick={RecordUpload}>
                  <FontAwesomeIcon icon={faFileUpload} size="2x" />
                </button></React.Fragment>)
              :
              (<button id="stop_record" onClick={RecordStop}>
                  <FontAwesomeIcon icon={faStopCircle} size="2x" />
                </button>)
            }
          </div>
        )
        :
        (
          <div className="recorder-controllers">
            <button id="start_video" className="disable">
              <FontAwesomeIcon icon={faVideo} size="2x" />
            </button>
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
			  <span id="recordPreview"></span><audio id="recordedAudio" preload="true"></audio>
      </div>
    </div>
  );
}