import React from 'react'
import { connect } from 'react-redux'

const ScoreComponent = (props) => {
  return(
    <div className='l-score'>
      100Gather
    </div>
  )
}

const mapStateToProps = (state) => {
  return {state: state.score}
}

export default connect(mapStateToProps)(ScoreComponent)
