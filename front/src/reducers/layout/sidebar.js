const initialState = {
  user: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_USER':
      return Object.assign({}, state, {
        user: action.value
      })
    default:
      return state
  }
}
