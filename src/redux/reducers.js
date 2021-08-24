const initialState = {
  isRecord: false,
}

const reducer = (state = initialState, action) => {
  if (action.type === 'ISRECORD') {
    state.isRecord = action.payload;
  }

  return state;
}

export default reducer;