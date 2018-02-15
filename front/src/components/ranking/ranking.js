import React from 'react'
import { connect } from 'react-redux'

import Ranker from './ranker'

class Ranking extends React.Component {
  constructor(props) {
    super(props)

    this.fetchRanking()
  }

  fetchRanking() {
    fetch('http://localhost:3000/ranking')
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
