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
// Top
import Map from './components/top/map'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Header />
        <Map />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
