import React from 'react'

export default class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <div className='p-user'>
        <img src={this.props.user.profile_image} />
      </div>
    )
  }
}
