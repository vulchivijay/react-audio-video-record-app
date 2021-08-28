const initialState = {
  isAudio: false,
  isVideo: false,
  isRecordStopoed: false,
  isClock: false,
  isAudioReview: false,
  isVideoReview: false,
}

const reducer = (state = initialState, action) => {
  console.log('action: ', action);
  switch (action.type) {
    case "ISAUDIO":
      return {...state, isAudio : action.isAudio }
    case "ISVIDEO":
      return {...state, isVideo : action.isVideo }
    case "ISRECORDSTOPPED":
      return {...state, isRecordStopoed : action.isRecordStopoed }
    case "ISAUDIOPREVIEW":
      return {...state, isAudioReview : action.isAudioReview }
    case "ISVIDEOPREVIEW":
      return {...state, isVideoReview : action.isVideoReview }
    case "ISCLOCK":
      return {...state, isClock : action.isClock }
    default:
      return state;
  }
}

export default reducer;