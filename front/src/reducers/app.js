import { combineReducers } from 'redux'

import Header from './layout/header'
import Map from './top/map'
import Marker from './top/marker'
import Content from './top/content'

const main = combineReducers({
  Header,
  Map,
  Marker,
  Content
})

export default main
