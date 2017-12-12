import React from 'react'
import ReactDOM from 'react-dom'

import Score from './score'
import Map from './map'

export default class Top extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <div className='top'>
        <Score />
        <Map />
      </div>
    )
  }
}
