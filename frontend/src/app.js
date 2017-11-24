import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Store
import configureStore from './store/configureStore'

// Container
import Header from './containers/layouts/header'
import Top from './containers/top'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <div className='contents'>
      <Header />
      <Top />
    </div>
  </Provider>,
  document.getElementById('app')
)
