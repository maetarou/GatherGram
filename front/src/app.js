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
// Ranking
import Ranking from './components/ranking/ranking'

const store = configureStore()

// const get_gather = () => {
//   fetch('http://localhost:3000/user/get_gather')
//     .then((response) => {
//     })
// }
// 
// get_gather()

const Routing = () => {
  return(
    <div>
      <Route exact path='/' component={Map} />
      <Route path='/ranking' component={Ranking} />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Header />
        <Sidebar />

        <Routing />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
)
