import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

const SidebarIcon = (props) => {
  return(
    <div onClick={props.handleClick}>
      <FontAwesome name='angle-double-right' />
    </div>
  )
}

const SidebarContents = (props) => {
  return(
    <div className='p-sidebar__menu'>
      <div className='p-sidebar__menu__in'>
        <div className='p-sidebar__menu__in__header'>
          ユーザーのプチ情報出すところ
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
      hideSidebar: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      hideSidebar: (this.state.hideSidebar ? false : true)
    })
  }

  render() {
    return(
      <div className='p-sidebar'>
        {
          this.state.hideSidebar ?
          <SidebarContents handleClick={this.handleClick} /> :
          <SidebarIcon handleClick={this.handleClick} />
        }
      </div>
    )
  }
}
