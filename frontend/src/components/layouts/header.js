import React from 'react'
import ReactDOM from 'react-dom'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <div className='header'>
        <h1>OIC::Gather</h1>
      </div>
    )
  }
}
