import React from 'react'
import { connect } from 'react-redux'

import Content from './content'

class Marker extends React.Component {
  constructor(props) {
    super(props)

    this.handleCLick = this.handleCLick.bind(this)
  }

  handleCLick() {
    this.props.dispatch({
      type: 'CLICK_EVENT'
    })
  }

  render() {
    return(
    <div className='marker' onClick={this.handleCLick}>
      <img
        src={this.props.content.media.image_link}
        className='marker__img'
      />
      {
        this.props.state.hideFlg ?
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
