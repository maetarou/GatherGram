import React from 'react'
import { connect } from 'react-redux'

class Restaurant extends React.Component {
  render() {
    return(
      <ul>
        {console.log(this.state)}
        <li>{!this.props.gnavi.rest.name}</li>
        <li>{!this.props.gnavi.rest.address}</li>
        <li>{!this.props.gnavi.rest.tel}</li>
        <li>{!this.props.gnavi.rest.opentime}</li>
        <li>{!this.props.gnavi.rest.holiday}</li>
        <li>{!this.props.gnavi.rest.url}</li>
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.score}
}

export default connect(mapStateToProps)(Restaurant)
