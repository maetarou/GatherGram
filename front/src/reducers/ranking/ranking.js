const initialState = {
  top_users: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_RANKING':
      return Object.assign({}, state, {
        top_users: action.value
      })
    default:
      return state
  }
}
