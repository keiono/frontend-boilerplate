import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import NetworkView from './containers/NetworkView'
import Entrance from './containers/Entrance'

import configure from './store'


const store = configure()
const history = syncHistoryWithStore(browserHistory, store)


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Entrance} />
      <Route
        path="network"
        component={NetworkView}
      />
    </Router>
  </Provider>,
  document.getElementById('root')
)
