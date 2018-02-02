import React from 'react'

export default class Restaurant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <ul>
        {console.log(this.props)}
        <li>{this.props.gnavi.rest.name}</li>
        <li>{this.props.gnavi.rest.address}</li>
        <li>{this.props.gnavi.rest.tel}</li>
        <li>{this.props.gnavi.rest.opentime}</li>
        <li>{this.props.gnavi.rest.holiday}</li>
        <li>{this.props.gnavi.rest.url}</li>

      </ul>
    )
  }
}
