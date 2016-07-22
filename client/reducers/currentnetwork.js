import { Map, Set } from 'immutable'

const SET_CURRENT_NETWORK = 'SET_CURRENT_NETWORK'
const CLEAR_CURRENT_NETWORK = 'CLEAR_CURRENT_NETWORK'

const defaultState = Set()

export default function currentNetworkState(state = defaultState, action) {
  switch (action.type) {
    case SET_CURRENT_NETWORK:
      return state.add(action.network)
    case CLEAR_CURRENT_NETWORK:
      return Set()
    default:
      return state
  }
}

export function setCurrentNetwork(networkUrl) {
  return {
    type: SET_CURRENT_NETWORK,
    network: networkUrl }
}

export function clear() {
  return {
    type: CLEAR_CURRENT_NETWORK }
}

