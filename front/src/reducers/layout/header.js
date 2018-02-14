const initialState = {
  sidebarFlg: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CLICK_SIDEBAR':
      return Object.assign({}, state, {
        sidebarFlg: !state.sidebarFlg
      })
    default:
      return state
  }
}
