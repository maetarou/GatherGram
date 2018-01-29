import React from 'react'

export default class Score extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <div className='l-score'>
        {this.props.score}Point
      </div>
    )
  }
}
