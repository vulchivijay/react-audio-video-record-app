import store from "./store"

export function RecordAudio(payload) {
  return store.dispatch(RecordingAudio(payload))
}

export function RecordingAudio(payload) {
  return {
    type: "ISAUDIO",
    isAudio: payload,
  }
}

export function RecordVideo(payload) {
  return store.dispatch(RecordingVideo(payload))
}

export function RecordingVideo(payload) {
  return {
    type: "ISVIDEO",
    isVideo: payload,
  }
}

export function RecordStopped(payload) {
  return store.dispatch(RecordingStopped(payload))
}

export function RecordingStopped(payload) {
  return {
    type: "ISRECORDSTOPPED",
    isRecordStopoed: payload,
  }
}

export function RecordedAudioReview(payload) {
  return store.dispatch(AudioReview(payload))
}

export function AudioReview(payload) {
  console.log('test audio preview: ', payload);
  return {
    type: "ISAUDIOPREVIEW",
    isAudioReview: payload,
  }
}

export function RecordedVideoReview(payload) {
  return store.dispatch(VideoReview(payload))
}

export function VideoReview(payload) {
  return {
    type: "ISVIDEOPREVIEW",
    isVideoReview: payload,
  }
}

export function ClockStartStop(payload) {
  return store.dispatch(Clock(payload))
}

export function Clock(payload) {
  return {
    type: "ISCLOCK",
    isClock: payload,
  }
}