import React from 'react'
import { connect } from 'react-redux'

import Content from './content'

class Marker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hideContent: false
    }

    this.handleCLick = this.handleCLick.bind(this)
  }

  handleCLick() {
    this.setState({
      hideContent: !this.state.hideContent
    })
  }

  render() {
    return(
    <div className='marker'>
      <img
        src={this.props.content.media.image_link}
        className='marker__img'
        onClick={this.handleCLick}
      />
      {
        this.state.hideContent ?
        <Content content={this.props.content} /> :
        null
      }
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.Marker}
}

export default connect(mapStateToProps)(Marker)
