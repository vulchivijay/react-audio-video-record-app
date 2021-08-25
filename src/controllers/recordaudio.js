import { RecordStartStop, ClockStartStop, RecordingStopped } from './../redux/actions';

let rec;

export const RecordStart = () => {
  let audioChunks = [];
  navigator.mediaDevices.getUserMedia( { audio : true } )
    .then(stream => {
      RecordStartStop(true);
      RecordingStopped(false);
      ClockStartStop(true);
      rec = new MediaRecorder(stream);
      let recordedAudio = document.querySelector('#recordedAudio');
      let recordPreviewLabel = document.querySelector('#recordPreview');
      rec.ondataavailable = e => {
        audioChunks.push(e.data);
        if (rec.state === "inactive") {
          let blob = new Blob(audioChunks, {type: 'audio/x-mpeg-3'});
          recordedAudio.src = URL.createObjectURL(blob);
          recordedAudio.controls = true;
          recordedAudio.autoplay = false;
          recordPreviewLabel.innerText = 'Preview: ';
        }
      }
      rec.start();
    })
    .catch( e => console.log(e) );
}

export const RecordStop = () => {
  RecordStartStop(false);
  RecordingStopped(true);
  ClockStartStop(false);
  rec.stop();
}

export const RecordCancel = () => {
  RecordStartStop(false);
  ClockStartStop(false);
  rec.stop();
}

export const RecordUpload = () => {
  // need to pass chunks to firebase storage
}