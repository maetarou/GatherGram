import React from 'react'
import ReactDOM from 'react-dom'

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
        <h1>Welcompe top screen!</h1>
      </div>
    )
  }
}
