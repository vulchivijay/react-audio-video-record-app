const initialState = {
  isAudio: false,
  isVideo: false,
  isRecordStopoed: false,
  isClock: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ISAUDIO":
      return {...state, isAudio : action.isAudio }
    case "ISVIDEO":
      return {...state, isVideo : action.isVideo }
    case "ISRECORDSTOPPED":
      return {...state, isRecordStopoed : action.isRecordStopoed }
    case "ISCLOCK":
      return {...state, isClock : action.isClock }
    default:
      return state;
  }
}

export default reducer;