import React from 'react'

export default class Restaurant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gnavi: props.gnavi
    }

    console.log(this.state.gnavi)
  }

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
