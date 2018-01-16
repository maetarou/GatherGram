import React from 'react'

import Sidebar from '../layouts/sidebar'
import Score from './score'
import Map from './map'
import User from './user'

export default class Top extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }

    this.getUserData()
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
      <div className='top'>
        <div className='l-navbar'>
          <Sidebar />
          <Score  score={this.state.user.gather} />
        </div>
        <Map />
      </div>
    )
  }
}
