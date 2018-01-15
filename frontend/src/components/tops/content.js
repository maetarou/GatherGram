import React from 'react'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
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
              <ul classNmae='p-content__in__info__list'>
                <li>
                  <span className='p-content__in__info__list__name'>
                    {this.props.content.username}
                  </span>
                </li>
                <li>{this.props.content.caption}</li>
                <li>instagram link : <a href={this.props.content.link}>{this.props.content.link}</a></li>
                <span>
                  <li>{console.log(this.props.content.gnavi.response.rest)}</li>
                  <li>restrante name : {this.props.content.gnavi.response.rest.name}</li>
                  <Restaurant />
                </span>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const Restaurant = () => {
  return(
    <div>aaa</div>
  )
}
