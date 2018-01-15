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
              ユーザー: {this.props.content.username}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
