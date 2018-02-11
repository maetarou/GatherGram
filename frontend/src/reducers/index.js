import { combineReducers } from 'redux'

// Layouts
import Header from './Layouts/header'
import Score from './layouts/score'
import Sidebar from './layouts/sidebar'
// Tops
import Content from './tops/content'
import Map from './tops/map'
import Marker from './tops/marker'
import Restaurant from './tops/restaurant'
import Tops from './tops/tops'
import User from './tops/user'
// Rankings
import Ranking from './rankings/rankings'
// PrivacyPlicy
import PrivacyPolicy from './privacy_policy/privacy_policy'

const main = combineReducers({
  Header,
  Score,
  Sidebar,
  Content,
  Map,
  Marker,
  Restaurant,
  Tops,
  User,
  Ranking,
  PrivacyPolicy
})

export default main
