import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Container
import Header from './components/layouts/header'
import Sidebar from './components/layouts/sidebar'
import Top from './components/top/top'

ReactDOM.render(
  <div>
    <Header />
    <Sidebar />
    <div className='l-contents'>
      <Top />
    </div>
  </div>,
  document.getElementById('app')
)
