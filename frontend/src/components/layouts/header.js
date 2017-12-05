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
        <h1>GatherGram</h1>
      </div>
    )
  }
}
