import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

// Container
import Header from './components/layouts/header'
import Sidebar from './components/layouts/sidebar'
import Top from './components/top/top'
import Ranking from './components/ranking/ranking'

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Header />
      <Sidebar />
      <div className='l-contents'>
        <Top />
      </div>

      <Route exact path='/' component={Top} />
      <Route path='/ranking' component={Ranking} />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
)
