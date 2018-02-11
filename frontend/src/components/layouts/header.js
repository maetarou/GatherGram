import React from 'react'
import { connect } from 'react-redux'

import Sidebar from './sidebar'
import Score from './score'

class Header extends React.Component {
  render() {
    return(
      <div className='l-header'>
        <img src='http://xn--hckp3ac2l.jp/wp-content/uploads/2016/07/sr-honoka-smile-7ga16-mae.jpg' className='l-header__logo' />
        <Score />
        <Sidebar className='l-header__sidebar' />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.header}
}

export default connect(mapStateToProps)(Header)
