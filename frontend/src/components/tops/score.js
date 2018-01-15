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
      <div className='p-score'>
        <p>{this.props.score}Point</p>
      </div>
    )
  }
}
