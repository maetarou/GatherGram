import { createStore } from 'redux'
import reducer from '../reducers/top'

export default function configureStore() {
  const store = createStore(reducer)
  return store
}
