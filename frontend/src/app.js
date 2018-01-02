import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import Header from './components/layouts/header'
import Sidebar from './components/layouts/sidebar'
import Tops from './components/tops/tops'
import Rankings from './components/rankings/rankings'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Sidebar />

      <div className='l-contents'>
        <Route exact path='/tops' component={Tops} />
        <Route path='/rankings' component={Rankings} />
        <Route path='*' component={Tops} />
      </div>
    </div>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
