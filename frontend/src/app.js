import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'

// Components
import Header from './components/layouts/header'
import Sidebar from './components/layouts/sidebar'
import Tops from './components/tops/tops'
import Rankings from './components/rankings/rankings'

(() =>  { 
  fetch('https://gathergram.herokuapp.com/user/get_gather')
    .then((response) => {
      response.json().then((res) => {
        console.log('hello', res)
      })
    })
})()

const App = () => (
  <HashRouter basename="/">
    <div>
      <Header />

      <div className='l-contents'>
        <Route exact path='/' component={Tops} />
        <Route path='/rankings' component={Rankings} />
        <Route path='/user' component={Tops} />
      </div>
    </div>
  </HashRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
