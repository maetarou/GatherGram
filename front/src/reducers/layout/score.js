const initialState = {
  score: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_SCORE':
      return Object.assign({}, state, {
        score: action.value
      })
    default:
      return state
  }
}
