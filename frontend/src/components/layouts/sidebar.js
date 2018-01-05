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

const SidebarContents = () => {
  return(
    <div className='p-sidebar'>
      <div className='p-sidebar__header'>
        ユーザーのプチ情報出すところ
      </div>
      <ul>
        <li><Link to='/'>トップ</Link></li>
        <li><Link to='/rankings'>ランキング</Link></li>
        <li><Link to='/user/info'>ユーザー情報</Link></li>
      </ul>
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
    console.log(this.state)
    this.setState(() => {
      return {hideSidebar: true}
    })
  }

  render() {
    return(
      <div className='p-sidebar'>
        {this.state.hideSidebar ? <SidebarContents /> : <SidebarIcon handleClick={this.handleClick} />}
      </div>
    )
  }
}
