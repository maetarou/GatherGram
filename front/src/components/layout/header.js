import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Score from './score'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.dispatch({
      type: 'CLICK_SIDEBAR'
    })
  }

  render() {
    return(
      <div className='header'>
        <img
          src='https://rr.img.naver.jp/mig?src=http%3A%2F%2Fcdn.mkimg.carview.co.jp%2Fminkara%2Fuserstorage%2F000%2F009%2F818%2F181%2F73ea5d0eff.jpg&twidth=1200&theight=1200&qlt=80&res_format=jpg&op=r'
          className='header__img'
          onClick={this.handleClick}
        />
        <Score />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.Header}
}

export default connect(mapStateToProps)(Header)
