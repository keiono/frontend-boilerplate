import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import todos from './todos'
import currentNetwork from './currentnetwork'

import {store as netStore} from 'cy-network-store'

console.log("--------networks ----")
console.log(netStore.networks)
console.log(routing)
console.log(todos)

const cy_network = combineReducers(netStore)

export default combineReducers({
  routing,
  todos,
  currentNetwork,
  cy_network }
  )
