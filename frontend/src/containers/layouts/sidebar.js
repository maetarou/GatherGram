import { connect } from 'react-redux'

import Sidebar from '../../components/layouts/sidebar'

function mapStateToProps(state) {
  return state
}

export default connect(
  mapStateToProps
)(Sidebar)
