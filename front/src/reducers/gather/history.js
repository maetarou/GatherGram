const initialState = {
  gatherHistory: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_HISTORY':
      return Object.assign({}, state, {
        gatherHistory: action.value
      })
    default:
      return state
  }
}
