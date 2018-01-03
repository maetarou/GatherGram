import React from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <div className='p-sidebar c-none'>
        <div className='p-sidebar__header'>
          ユーザーのプチ情報出すところ
        </div>
        <ul>
          <li><Link to='/'>トップ</Link></li>
          <li><Link to='/rankings'>ランキング</Link></li>
          <li><Link to='/user/info'>ユーザー情報</Link></li>
        </ul>
      </div>
    )
  }
}
