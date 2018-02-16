import { combineReducers } from 'redux'

import Header from './layout/header'
import Score from './layout/score'
import Sidebar from './layout/sidebar'
import Map from './top/map'
import Marker from './top/marker'
import Content from './top/content'
import Ranking from './ranking/ranking'
import Ranker from './ranking/ranker'
import GatherHistory from './gather/history'

const main = combineReducers({
  Header,
  Score,
  Sidebar,
  Map,
  Marker,
  Content,
  Ranking,
  Ranker,
  GatherHistory
})

export default main
