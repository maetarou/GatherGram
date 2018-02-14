import React from 'react'
import { connect } from 'react-redux'

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='content'>
        This is Contents
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.Content}
}

export default connect(mapStateToProps)(Content)
