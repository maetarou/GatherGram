import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Store
import configureStore from './store/configureStore'

// Container
import Header from './containers/layouts/header'
import Sidebar from './containers/layouts/sidebar'
import Top from './containers/top'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Header />
      <Sidebar />
      <div className='l-contents'>
        <Top />
      </div>
    </div>
  </Provider>,
  document.getElementById('app')
)
