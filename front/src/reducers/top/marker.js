const initialState = {
  hideFlg: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CLICK_EVENT':
      return Object.assign({}, state, {
        hideFlg: !state.hideFlg 
      })
    default:
      return state
  }
}
