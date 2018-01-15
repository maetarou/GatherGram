import React from 'react'

export default class Ranking extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }

    this.getRankingData()
  }

  getRankingData() {
    return fetch('http://localhost:3000/ranking')
             .then((response) => {
               response.json().then((res) => {
                 this.setState({users: res.top_users})
               })
             })
  }

  render() {
    return(
      <div>
        {console.log(this.state.users)}
        {this.state.users.map((user) => {
          return(
            <ul key={user.id}>
              <li>{user.name}</li>
              <li>{user.gather}</li>
            </ul>
          )
          console.log(user.id)
        })}
      </div>
    )
  }
}
