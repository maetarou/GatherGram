import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Route, Redirect } from 'react-router-dom'

///////////////
// Store
//////////////
import configureStore from './store/configureStore'

///////////////
// Components
//////////////
// Layout
import Header from './components/layout/header'
import Sidebar from './components/layout/sidebar'
// Top
import Map from './components/top/map'

const store = configureStore()

// const get_gather = () => {
//   fetch('http://localhost:3000/user/get_gather')
//     .then((response) => {
//     })
// }
// 
// get_gather()

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Header />
        <Sidebar />
        <Map />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
