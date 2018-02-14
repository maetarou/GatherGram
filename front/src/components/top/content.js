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
            <img
              src={this.props.content.media.image_link}
            />
            <div className='content__in__info'>
              <div className='content__in__info__caption'>{this.props.content.media.caption}</div>
              <div className='content__in__info__username'>by {this.props.content.media.username}</div>
            </div>
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
