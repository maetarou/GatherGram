import React from 'react'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    console.log(props)
  }


  render() {
    return(
      <div className='p-content'>
        <div className='p-content__out' onClick={this.props.handleClick}>
          <div className='p-content__in'>
            <div className='p-content__in__images'>
              <img src={this.props.content.imageLink} className='p-content__in__images__img' />
            </div>

            <div className='p-content__in__info'>
              {this.props.content.username}
              {this.props.content.caption}
              instagram link : <a href={this.props.content.link}>{this.props.content.link}</a>
              {console.log(this.props.content.gnavi)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
