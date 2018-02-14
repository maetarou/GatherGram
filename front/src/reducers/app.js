import { combineReducers } from 'redux'

import Header from './layout/header'
import Map from './top/map'

const main = combineReducers({
  Header,
  Map
})

export default main
