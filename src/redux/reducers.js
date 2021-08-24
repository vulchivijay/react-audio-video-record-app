const initialState = {
  isRecord: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ISRECORD":
      return {...state, isRecord : action.isRecord }
    default:
      return state;
  }
}

export default reducer;