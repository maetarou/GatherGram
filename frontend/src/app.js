import React from 'react'
import ReactDOM from 'react-dom'

// import './application.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

ReactDOM.render(
  <div>Hello React!</div>,
  document.getElementById('app')
)
