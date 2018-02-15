import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleCLick.bind(this)
    this.fetchUser()
  }

  handleCLick() {
    this.props.dispatch({
      type: 'CLICK_SIDEBAR'
    })
  }

  fetchUser() {
    fetch('http://localhost:3000/user')
      .then((response) => {
        response.json().then((res) => {
          this.props.dispatch({
            type: 'GET_USER',
            value: res
          })
        })
      })
  }

  render() {
    return(
      <div>
        {
          this.props.state.Header.sidebarFlg ?
          <SidebarMenu user={this.props.state.Sidebar.user} handleClick={this.handleClick} /> :
          null
        }
      </div>
    )
  }
}

const SidebarMenu = (props) => {
  return(
    <div className='sidebar'>
      <div className='sidebar__menu' onClick={props.handleClick}>
        <div className='sidebar__menu__in'>
          <div className='sidebar__menu__in__header'>
            <div className='sidebar__menu__in__header__name'>{props.user.name}</div>
          </div>

          <div className='sidebar__menu__in__contents'>
            <Link to='/ranking'>ランキング</Link>
          </div>
        </div>
      </div>

      <div className='p-sidebar__menu__out'></div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {state: {Sidebar: state.Sidebar, Header: state.Header}}
}

export default connect(mapStateToProps)(Sidebar)
