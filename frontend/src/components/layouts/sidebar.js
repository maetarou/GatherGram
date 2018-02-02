import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

import User from '../tops/user'

const SidebarIcon = (props) => {
  return(
    <div onClick={props.handleClick} className='p-sidebar'>
      <User user={props.user} />
    </div>
  )
}

const SidebarContents = (props) => {
  return(
    <div className='p-sidebar__menu'>
      <div className='p-sidebar__menu__in'>
        <div className='p-sidebar__menu__in__header'>
          {props.user.name}
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

      <div className='p-sidebar__menu__out' onClick={props.handleClick}></div>
    </div>
  )
}

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      hideSidebar: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.getUserData()
  }

  handleClick() {
    this.setState({
      hideSidebar: (this.state.hideSidebar ? false : true)
    })
  }

  getUserData() {
    return fetch('https://gathergram.herokuapp.com/user')
             .then((response) => {
               response.json().then((res) => {
                 this.setState({user: res})
               })
             })
  }

  render() {
    return(
      <div className='p-sidebar'>
        <SidebarIcon handleClick={this.handleClick} user={this.state.user} />
        {
          this.state.hideSidebar ?
          <SidebarContents handleClick={this.handleClick} user={this.state.user} /> :
          null
        }
      </div>
    )
  }
}
