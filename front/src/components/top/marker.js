import React from 'react'
import { connect } from 'react-redux'


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

const Content = (props) => {
  return(
    <div className='content'>
      <div className='content__out' onClick={props.handleClick}>
        {console.log(props)}
        <div className='content__in'>
          <img
            src={props.content.media.image_link}
          />
          <div className='content__in__info'>
            <div className='content__in__info__caption'>{props.content.media.caption}</div>
            <div className='content__in__info__username'>by {props.content.media.username}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {state: state.Marker}
}

export default connect(mapStateToProps)(Marker)
