const initialState = {
  isRecord: false,
  isClock: false,
  isRecordStopped: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ISRECORD":
      return {...state, isRecord : action.isRecord }
    case "ISCLOCK":
      return {...state, isClock : action.isClock }
    case "ISRECORDSTOPPED":
      return {...state, isRecordStopped : action.isRecordStopped }
    default:
      return state;
  }
}

export default reducer;