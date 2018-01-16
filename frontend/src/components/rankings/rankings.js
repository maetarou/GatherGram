import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

export default class Ranking extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }

    this.getRankingData()
  }

  getRankingData() {
    return fetch('https://gathergram.herokuapp.com/ranking')
             .then((response) => {
               response.json().then((res) => {
                 console.dir(res)
                 this.setState({users: res.top_users})
               })
             })
  }

  render() {
    return(
      <div>
        {this.state.users.map((user) => {
          return(
            <ul key={user.id} className='p-ranking' >
              <img
                src='http://suzakijunichi.com/blog/wp-content/uploads/2016/11/1.jpg'
                className='p-ranking__img'
              />
              <li className='p-ranking__gather'>{user.gather}</li>
              <li>{user.name}</li>
            </ul>
          )
        })}

        <div className='p-ranking__footer'>
          <div className='p-ranking__footer__rank'>
            You're rank : 1位
          </div>

          <Link to='/' className='p-ranking__footer__button'>
            <FontAwesome name='mail-reply' />
          </Link>
        </div>
      </div>
    )
  }
}
