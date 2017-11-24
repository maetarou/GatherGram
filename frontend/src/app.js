import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Top from './containers/top'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <div className='contents'>
      <h1 className='title'>Hello, React!</h1>
      <Top />
    </div>
  </Provider>,
  document.getElementById('app')
)
