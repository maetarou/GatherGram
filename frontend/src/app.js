import React from 'react'
import ReactDOM from 'react-dom'

// import './application.css'
import Top from './components/Top.jsx'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

ReactDOM.render(
  <div className='contents'>
    <div>Hello React!</div>
    <Top />
  </div>,
  document.getElementById('app')
)
