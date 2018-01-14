import React from 'react'

import Score from './score'
import Map from './map'
import User from './user'

export default class Top extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }

    this.getUserData()
  }

  getUserData() {
    return fetch('http://localhost:3000/index')
             .then((response) => {
               response.json().then((res) => {
                 this.setState({data: res.current_user})
               })
             })
  }

  render() {
    return(
      <div className='top'>
        <div className='l-navbar'>
          <Score />
          <User />
        </div>
        <Map />
      </div>
    )
  }
}
