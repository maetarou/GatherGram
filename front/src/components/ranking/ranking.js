import React from 'react'
import { connect } from 'react-redux'

import Ranker from './ranker'

const url = document.location.hostname == 'localhost' ?
            'http://localhost:3000/ranking' :
            'https://gathergram.herokuapp.com/ranking'

class Ranking extends React.Component {
  constructor(props) {
    super(props)

    this.fetchRanking()
  }

  fetchRanking() {
    fetch(url)
      .then((response) => {
        response.json().then((res) => {
          this.props.dispatch({
            type: 'GET_RANKING',
            value: res.top_users
          })
        })
      })
  }

  render() {
    return(
      <ul className='ranking'>
        {this.props.state.top_users.map((user, idx) => {
          return(
            <Ranker
              user={user}
              rank={idx}
              key={idx}
            />
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.Ranking}
}

export default connect(mapStateToProps)(Ranking)
