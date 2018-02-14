import React from 'react'

import Restaurant from './restaurant'

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
        {console.log(this.props)}
        <div className='p-content__out'>
          <div className='p-content__in'>
            <div className='p-content__in__images'>
              <a href={this.props.content.media.link}>
                <img src={this.props.content.media.image_link} className='p-content__in__images__img' />
              </a>
            </div>

            <div className='p-content__in__info'>
              <ul className='p-content__in__info__list'>
                <li>
                  <span className='p-content__in__info__list__name'>
                    {this.props.content.media.username}
                  </span>
                </li>
                <li>{this.props.content.media.caption}</li>

                <hr />

                <span className='p-content__in__info__list__gnavi'>
                  <Restaurant gnavi={this.props.content.gnavi.response} />
                </span>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
