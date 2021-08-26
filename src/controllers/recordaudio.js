import { RecordStartStop, ClockStartStop, RecordingStopped } from './../redux/actions';
import { uploadFile } from './../config/firebase';

let rec;
let uploadBlob;

export const RecordStart = () => {
  let audioChunks = [];
  uploadBlob = '';
  navigator.mediaDevices.getUserMedia( { audio : true } )
    .then(stream => {
      RecordStartStop(true);
      ClockStartStop(true);
      rec = new MediaRecorder(stream);
      let recordedAudio = document.querySelector('#recordedAudio');
      let recordPreviewLabel = document.querySelector('#recordPreview');
      recordedAudio.removeAttribute('src');
      recordedAudio.removeAttribute('controls');
      recordPreviewLabel.innerHTML = "";
      rec.ondataavailable = e => {
        audioChunks.push(e.data);
        if (rec.state === "inactive") {
          let blob = new Blob(audioChunks, {type: 'audio/webm  codecs=vp9'});
          uploadBlob = blob;
          recordedAudio.src = URL.createObjectURL(blob);
          recordedAudio.controls = true;
          recordedAudio.autoplay = false;
          recordPreviewLabel.innerText = 'Preview';
        }
      }
      rec.start();
    })
    .catch( e => console.log(e) );
}

export const RecordStop = () => {
  RecordStartStop(false)
  RecordingStopped(true);
  ClockStartStop(false);
  rec.stop();
}

export const RecordUpload = () => {
  RecordingStopped(false);
  let recordedAudio = document.querySelector('#recordedAudio');
  let recordPreviewLabel = document.querySelector('#recordPreview');
  recordedAudio.removeAttribute('src');
  recordedAudio.removeAttribute('controls');
  recordPreviewLabel.innerHTML = "";
  uploadFile(uploadBlob);
}