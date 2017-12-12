import React from 'react'
import { connect } from 'react-redux'

import Top from '../components/tops/top'

function mapStateToProps(state) {
  return state
}

export default connect(
  mapStateToProps
)(Top)
