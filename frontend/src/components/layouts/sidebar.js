import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import configureStore from '../../store/configureStore'
import User from '../tops/user'

const store = configureStore()

class SidebarComponent extends React.Component {
  render() {
    return(
      <div className='p-sidebar'>
        {console.log(store.getState().Sidebar.hideFlg)}
        {console.log(this.props.state.hideFlg)}
        <SidebarIcon />
        {
          store.getState().Sidebar.hideFlg ?
          <SidebarContents /> :
          null
        }
      </div>
    )
  }
}

// const SidebarComponent = (props) => {
//   return(
//     <div className='p-sidebar'>
//       {console.log(store.getState().Sidebar.hideFlg)}
//       <SidebarIcon props={props} />
//       {
//         store.getState().Sidebar.hideFlg ?
//         <SidebarContents /> :
//         null
//       }
//     </div>
//   )
// }

const SidebarIcon = (props) => {
  return(
    <div
      onClick={() => {
        console.log(store.getState().Sidebar.hideFlg)
        store.dispatch({
          type: 'HANDLE_CLICK'
        })
      }}
      className='p-sidebar'
    >
      <User />
    </div>
  )
}

const SidebarContents = (props) => {
  return(
    <div className='p-sidebar__menu'>
      <div className='p-sidebar__menu__in'>
        <div className='p-sidebar__menu__in__header'>
          User Name
        </div>

        <ul className='p-sidebar__menu__in__contents'>
          <li>
            <FontAwesome name='home' />
            <Link to='/'>トップ</Link>
          </li>
          <li>
            <FontAwesome name='line-chart' />
            <Link to='/rankings'>ランキング</Link>
          </li>
          <li>
            <FontAwesome name='cog' />
            <Link to='/user/info'>ユーザー情報</Link>
          </li>
          <li>
            <FontAwesome name='cog' />
            <Link to='/privacy_policy'>プライバシーポリシー</Link>
          </li>
        </ul>
      </div>

      <div
        className='p-sidebar__menu__out'
        onClick={() => {
          console.log(store.getState())
          store.dispatch({
            type: 'HANDLE_CLICK'
          })
        }}>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {state: state.Sidebar}
}

export default connect(mapStateToProps)(SidebarComponent)
