import React from 'react'

export default class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  getUser() {
    return fetch('http://localhost:3000/user')
             .then((response) => {
               response.json().then((res) => {
                 this.setState({user: res})
               })
             })
  }

  render() {
    return(
      <div className='p-user'>
      </div>
    )
  }
}
