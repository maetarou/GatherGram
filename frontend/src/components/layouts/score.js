import React from 'react'

export default class Score extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }

    this.getScore()
  }

  getScore() {
    return fetch('https://gathergram.herokuapp.com/user')
             .then((response) => {
               response.json().then((res) => {
                 this.setState({score: res.gather})
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
