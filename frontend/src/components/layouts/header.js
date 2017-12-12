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
      <div className='l-header'>
        <h1 className='l-header__title'>GatherGram</h1>
      </div>
    )
  }
}
