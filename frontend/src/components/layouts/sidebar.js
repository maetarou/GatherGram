import React from 'react'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <div className='p-sidebar'>
        This is Sidebar
      </div>
    )
  }
}
