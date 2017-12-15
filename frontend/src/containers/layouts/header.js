import { connect } from 'react-redux'

import Header from '../../components/layouts/header'

function mapStateToProps(state) {
  return state
}

export default connect(
  mapStateToProps
)(Header)
