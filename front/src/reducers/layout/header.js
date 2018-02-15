const initialState = {
  sidebarFlg: false,
  profileImage: 'https://rr.img.naver.jp/mig?src=http%3A%2F%2Fcdn.mkimg.carview.co.jp%2Fminkara%2Fuserstorage%2F000%2F009%2F818%2F181%2F73ea5d0eff.jpg&twidth=1200&theight=1200&qlt=80&res_format=jpg&op=r'
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CLICK_SIDEBAR':
      return Object.assign({}, state, {
        sidebarFlg: !state.sidebarFlg
      })
    case 'GET_USER_IMAGE':
      return Object.assign({}, state, {
        profileImage: action.value
      })
    default:
      return state
  }
}
