import React from 'react'
import request from 'superagent'

import Score from './score'
import Map from './map'

export default class Top extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }

    this.getData =  this.getData.bind(this)
  }

  getData() {
    request
      .get('http://localhost:3000/index')
      .end(function(err, res) {
        console.log(res.body)
        console.log(err)
      })
  }

  render() {
    return(
      <div className='top'>
        <Score />
        <Map />
        {this.getData()}
      </div>
    )
  }
}
