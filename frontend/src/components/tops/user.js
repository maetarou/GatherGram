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
        <img src='http://img.lovelive-matome.com/imgs/tikyu/1507/15/honoka.jpg' />
      </div>
    )
  }
}
