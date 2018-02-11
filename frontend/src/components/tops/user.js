import React from 'react'
import { connect } from 'react-redux'

const UserComponent = (props) => {
  return(
    <div className='p-user'>
      <img src='http://xn--48s17vxvep85c.com/wp-content/uploads/2013/09/Vjjx8sf.jpg' />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {state: state.user}
}

export default connect(mapStateToProps)(UserComponent)
