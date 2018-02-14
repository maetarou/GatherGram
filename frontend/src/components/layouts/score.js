import React from 'react'

export default class Score extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      score: ''
    }

    this.getScore()
  }

  getScore() {
    return fetch('http://localhost:3000/user')
             .then((response) => {
               response.json().then((res) => {
                 this.setState({score: res})
               })
             })
  }

  render() {
    return(
      <div className='l-score'>
        {this.state.score}Gather
      </div>
    )
  }
}
