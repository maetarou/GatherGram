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
// Layouts
import Header from './components/layout/header'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Header />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
