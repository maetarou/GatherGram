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
              <a href={this.props.content.link}>
                <img src={this.props.content.imageLink} className='p-content__in__images__img' />
              </a>
            </div>

            <div className='p-content__in__info'>
              <ul className='p-content__in__info__list'>
                <li>
                  <span className='p-content__in__info__list__name'>
                    {this.props.content.username}
                  </span>
                </li>
                <li>{this.props.content.caption}</li>
                <span>
                  {console.log(this.props.content.gnavi)}
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
    <li>Welcome gnavi menu</li>
  )
}
