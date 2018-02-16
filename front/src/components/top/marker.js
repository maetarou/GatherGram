import React from 'react'
import { connect } from 'react-redux'

import Content from './content'

class Marker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hideContent: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      hideContent: !this.state.hideContent
    })
  }

  render() {
    return(
    <div className='marker'>
      {
        this.state.hideContent ?
        <Content content={this.props.content} handleClick={this.handleClick} /> :
        <img
          src={this.props.content.media.image_link}
          className='marker__img'
          onClick={this.handleClick}
        />
      }
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.Marker}
}

export default connect(mapStateToProps)(Marker)
