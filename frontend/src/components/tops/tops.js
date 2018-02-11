import React from 'react'
import { connect } from 'react-redux'

import Map from './map'
import User from './user'

class Top extends React.Component {
  render() {
    return(
      <div className='top'>
        <Map />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.tops}
}

export default Top
