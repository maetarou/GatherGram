import React from 'react'
import ReactDOM from 'react-dom'

export default class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <div className='p-map'>
        mapを埋め込む
      </div>
    )
  }
}
