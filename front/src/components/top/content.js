import React from 'react'
import { connect } from 'react-redux'

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='content'>
        <div className='content__out'>
          <div className='content__in'>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.Content}
}

export default connect(mapStateToProps)(Content)
