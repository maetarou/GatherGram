import React from 'react'
import { connect } from 'react-redux'

class Score extends React.Component {
  constructor(props) {
    super(props)

    this.fetchScore()
  }

  fetchScore() {
    fetch('http://localhost:3000/user')
      .then((response) => {
        response.json().then((res) => {
          this.props.dispatch({
            type: 'GET_SCORE',
            value: res.gather
          })
        })
    })
  }

  render() {
    return(
      <div className='score'>
      {this.props.state.score}score
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.Score}
}

export default connect(mapStateToProps)(Score)
