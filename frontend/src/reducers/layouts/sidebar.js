const initialState = {
  hideFlg: true
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'HANDLE_CLICK':
      return Object.assign({}, state, {
        hideFlg: !state.hideFlg
      })
    default: 
      return state
  }
}
