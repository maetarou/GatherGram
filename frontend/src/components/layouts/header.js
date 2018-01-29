import React from 'react'
import ReactDOM from 'react-dom'

import Sidebar from './sidebar'
import Score from './score'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <div className='l-header'>
        <img src='http://xn--hckp3ac2l.jp/wp-content/uploads/2016/07/sr-honoka-smile-7ga16-mae.jpg' className='l-header__logo' />
        <Score />
        <Sidebar className='l-header__sidebar' />
      </div>
    )
  }
}
