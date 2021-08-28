import React, { useContext } from 'react';
import { RecordStartAudio, RecordStop, RecordStartVideo, RecordUpload } from '../../controllers/recordaudio';
import TimeSpinner from './../timespinner/index';
import { UserContext } from './../../providers/index';
import store from './../../redux/store';
import Waves from './waves';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faVideo ,faFileUpload, faStopCircle } from "@fortawesome/free-solid-svg-icons";

import './index.css';

export default function Recorder () {
  const user = useContext(UserContext);
  const { isAudio, isRecordStopoed, isVideo } = store.getState();

  return (
    <div className="recorder">
      { isVideo ? (
        <div className="recorded-video">
			    <video id="recordedVideo" preload="true"></video>
        </div>) : ''}
      { isAudio ? (
        <div className="recorder-animation">
          <Waves />
        </div>) : ''}
      { !isVideo ? (
      <div className="recorder-timer">
        <TimeSpinner />
      </div>) : ''}
      {
        isAudio || isVideo ? (
          <div className="recorder-controllers">
            <button id="stop_record" className="stop-record" onClick={RecordStop} >
              <FontAwesomeIcon icon={faStopCircle} size="2x" color="#e53935" />
            </button>
          </div>
        )
        :
        (
          <div className="recorder-controllers">
            <button id="start_video" className="start-video">
              <FontAwesomeIcon icon={faVideo} size="2x" color="#00acc1" onClick={RecordStartVideo}/>
            </button>
            <button id="start_record" className="start-audio" onClick={RecordStartAudio}>
              <FontAwesomeIcon icon={faMicrophone} size="2x" color="#fb8c00"/>
            </button>
            {
              user && isRecordStopoed && (
                <button id="upload_record" className="file-upload" onClick={RecordUpload}>
                  <FontAwesomeIcon icon={faFileUpload} size="2x" color="#43a047" />
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
			  <audio id="recordedAudio" preload="true"></audio>
      </div>
    </div>
  );
}


