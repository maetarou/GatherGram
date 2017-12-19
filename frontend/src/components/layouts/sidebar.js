import React from 'react'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <div className='p-sidebar'>
        <div className='p-sidebar__header'>
          ユーザーのプチ情報出すところ
        </div>
        <ul>
          <li>ランキング</li>
          <li>ユーザー情報</li>
        </ul>
      </div>
    )
  }
}
