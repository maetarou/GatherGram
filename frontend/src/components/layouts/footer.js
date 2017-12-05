import React from 'react'
import ReactDOM from 'react-dom'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <div className='l-footer'>
        ©2017 GatherGram
      </div>
    )
  }
}
