import React from 'react'
import { connect } from 'react-redux'

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='content' onClick={this.props.handleClick}>
        <img
          src={this.props.content.media.image_link}
        />
        <div className='content__info'>
          <div className='content__info__caption'>{this.props.content.media.caption}</div>
          <div className='content__info__username'>by {this.props.content.media.username}</div>
        </div>
        <div className='content__link'>
          <a
            href={this.props.content.media.link}
            target='_blank'
          >
            to Instagram...
          </a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {state: state.Content}
}

export default connect(mapStateToProps)(Content)
