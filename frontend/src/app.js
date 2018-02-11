import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'

///////////////
// Store
//////////////
import configureStore from './store/configureStore'

///////////////
// Components
//////////////
import Header from './components/layouts/header'
import Sidebar from './components/layouts/sidebar'
import Tops from './components/tops/tops'
import Rankings from './components/rankings/rankings'
import PrivacyPolicy from './components/privacy_policy/privacy_policy'

const store = configureStore()

//(() =>  { 
//  fetch('https://gathergram.herokuapp.com/user/get_gather')
//    .then((response) => {
//      response.json().then((res) => {
//      })
//    })
//})()

const App = () => (
  <Provider store={store}>
    <HashRouter basename="/">
      <div>
        <Header />

        <div className='l-contents'>
          <Route exact path='/' component={Tops} />
          <Route path='/rankings' component={Rankings} />
          <Route path='/user' component={Tops} />
          <Route path='/privacy_policy' component={PrivacyPolicy} />
        </div>
      </div>
    </HashRouter>
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
