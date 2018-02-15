import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Score from './score'

const url = document.location.hostname == 'localhost' ?
            'http://localhost:3000/user' :
            'https://gathergram.herokuapp.com/user'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
    this.fetchUserImage()
  }

  handleClick() {
    this.props.dispatch({
      type: 'CLICK_SIDEBAR'
    })
  }

  fetchUserImage() {
    fetch(url)
      .then((response) => {
        response.json().then((res) => {
          this.props.dispatch({
            type: 'GET_USER_IMAGE',
            value: res.profile_image
          })
        })
      })
  }

  render() {
    return(
      <div className='header'>
        <img
          src={this.props.state.profileImage}
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
