import { RecordAudio, RecordStopped, RecordVideo, RecordedAudioReview, RecordedVideoReview, ClockStartStop } from './../redux/actions';
import { uploadFile } from './../config/firebase';

let rec;
let uploadBlob;

export const RecordStartAudio = () => {
  let audioChunks = [];
  uploadBlob = '';
  RecordedVideoReview(false);
  RecordedAudioReview(true);

  navigator.mediaDevices.getUserMedia( { audio : true } )
    .then(stream => {
      RecordAudio(true);
      ClockStartStop(true);
      rec = new MediaRecorder(stream);
      let recordedAudio = document.querySelector('#recordedAudio');
      rec.ondataavailable = e => {
        audioChunks.push(e.data);
        stream.getTracks().forEach(function(track) {
          track.stop();
        });
        if (rec.state === "inactive") {
          let blob = new Blob(audioChunks, {type: 'audio/webm codecs=vp9'});
          uploadBlob = blob;
          recordedAudio.src = URL.createObjectURL(blob);
          recordedAudio.controls = true;
          recordedAudio.autoplay = false;
        }
      }
      rec.start();
    })
    .catch( e => console.log(e) );
}

export const RecordStartVideo = () => {
  let audioChunks = [];
  uploadBlob = '';
  
  RecordedAudioReview(false);
  RecordedVideoReview(true);

  navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;

  if (navigator.getUserMedia) {
    navigator.getUserMedia({ audio: false, video: { width: 640, height: 480 } },
        function(stream) {
          RecordVideo(true);
          rec = new MediaRecorder(stream);

          let recordVideo = document.querySelector('#recordedVideo');
          recordVideo.srcObject = stream;
          recordVideo.onloadedmetadata = function(e) {
            recordVideo.play();
            recordVideo.controls = true;
          };

          rec.ondataavailable = e => {
            audioChunks.push(e.data);
            recordVideo.srcObject = null;
            stream.getTracks().forEach(function(track) {
              track.stop();
            });
            recordVideo = document.querySelector('#recordedVideo');
            if (rec.state === "inactive") {
              let blob = new Blob(audioChunks, {type: 'audio/mp4 codecs=vp9'});
              uploadBlob = blob;
              recordVideo.src = URL.createObjectURL(blob);
              recordVideo.controls = true;
              recordVideo.autoplay = false;
            }
          }
          rec.start();
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
  rec.stop();
}

export const RecordUpload = () => {
  RecordAudio(false);
  RecordedAudioReview(false);
  RecordedVideoReview(false);
  uploadFile(uploadBlob);
}