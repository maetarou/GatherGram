import React from 'react'
import { connect } from 'react-redux'

import Footer from '../../components/layouts/footer'

function mapStateToProps(state) {
  return state
}

export default connect(
  mapStateToProps
)(Footer)
