const initialState = {
  contents: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'GET_CONTENTS':
      return Object.assign({}, state, {
        contents: action.value
      })
    default:
      return state
  }
}
