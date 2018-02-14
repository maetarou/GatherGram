import React from 'react'
import { connect } from 'react-redux'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleCLick.bind(this)
  }

  handleCLick() {
    this.props.dispatch({
      type: 'CLICK_SIDEBAR'
    })
  }

  render() {
    return(
      <div>
        {
          this.props.state.Header.sidebarFlg ?
          <SidebarMenu handleClick={this.handleClick} /> :
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
          </div>

          <div className='sidebar__menu__in__contents'>
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
