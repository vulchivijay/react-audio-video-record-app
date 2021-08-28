import { RecordAudio, RecordStopped, RecordVideo, ClockStartStop } from './../redux/actions';
import { uploadFile } from './../config/firebase';

let rec;
let uploadBlob;

export const RecordStartAudio = () => {
  let audioChunks = [];
  uploadBlob = '';
  navigator.mediaDevices.getUserMedia( { audio : true } )
    .then(stream => {
      RecordAudio(true);
      ClockStartStop(true);
      rec = new MediaRecorder(stream);
      let recordedAudio = document.querySelector('#recordedAudio');
      recordedAudio.removeAttribute('src');
      recordedAudio.removeAttribute('controls');
      rec.ondataavailable = e => {
        audioChunks.push(e.data);
        if (rec.state === "inactive") {
          let blob = new Blob(audioChunks, {type: 'audio/webm codecs=vp9'});
          uploadBlob = blob;
          recordedAudio.src = URL.createObjectURL(blob);
          recordedAudio.controls = true;
          recordedAudio.autoplay = false;
          rec = null;
        }
      }
      rec.start();
    })
    .catch( e => console.log(e) );
}

export const RecordStartVideo = () => {
  navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;
  if (navigator.getUserMedia) {
    navigator.getUserMedia({ audio: false, video: { width: 640, height: 480 } },
        function(stream) {
          RecordVideo(true);
          let recordedAudio = document.querySelector('#recordedAudio');
          recordedAudio.removeAttribute('src');
          recordedAudio.removeAttribute('controls');
          let video = document.querySelector('#recordedVideo');
          video.srcObject = stream;
          video.onloadedmetadata = function(e) {
            video.play();
          };
        },
        function(err) {
          console.log("The following error occurred: " + err.name);
        }
    );
  } else {
    console.log("getUserMedia not supported");
  }
}

export const RecordStop = () => {
  RecordAudio(false)
  RecordVideo(false);
  RecordStopped(true);
  ClockStartStop(false);
  if (rec)
    rec.stop();
}

export const RecordUpload = () => {
  RecordAudio(false);
  let recordedAudio = document.querySelector('#recordedAudio');
  recordedAudio.removeAttribute('src');
  recordedAudio.removeAttribute('controls');
  uploadFile(uploadBlob);
}