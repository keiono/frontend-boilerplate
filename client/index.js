import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

// Pages
import App from './containers/App'
import NetworkView from './containers/NetworkView'
import Entrance from './containers/Entrance'

import configure from './store'


const init =  {
  networkUrl: 'http://ci-dev-serv.ucsd.edu:3001/ndex2cyjs/a54acf93-1300-11e6-9191-0660b7976219?server=dev2',
  renderOptions: {
    touchTapThreshold: 5
  }
};

const init2 = {
  'cy_network': {
    'networks': init
  }
}


const store = configure(init2)


const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>

      <Route
        path="/"
        component={App}
      />

      <Route
        path="/network"
        component={NetworkView}
      />

      <Route
        path="/top"
        component={Entrance}
      />

    </Router>
  </Provider>,
  document.getElementById('root')
)
