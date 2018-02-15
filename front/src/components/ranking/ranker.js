import React from 'react'
import { connect } from 'react-redux'

class Ranker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <li className='ranker'>
        <span className='ranker__rank'>{this.props.rank + 1}. </span>
        <span className='ranker__gather'>{this.props.user.gather}</span>
        <span className='ranker__name'>{this.props.user.name}</span>
      </li>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.Ranker}
}

export default connect(mapStateToProps)(Ranker)
