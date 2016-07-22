import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import NetworkViewer from '../../components/NetworkViewer'
import {networkDownloadActions,networkActions} from 'cy-network-store'

import * as CytoscapeActions from '../../actions/cytoscape'

import {teal600} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import style from './style.css'

// Theme settings
const muiTheme = getMuiTheme({

  appBar: {
    color: teal600
  }
});


/**
 * Base component for the network viewer page.
 */
class NetworkView extends Component {

  render() {

    console.log("************** top level comp")
    console.log(this.props)
    const { networks, networkDownload,
      downloadActions, networkActions } = this.props

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <NetworkViewer
          networks={networks}
          networkDownload={networkDownload}
          networkActions={networkActions}
          downloadActions={downloadActions}
        />
      </MuiThemeProvider>
    )
  }
}
function mapStateToProps(state) {
  return {
    networks: state.cy_network.networks,
    networkDownload: state.cy_network.networkDownload
  }
}

function mapDispatchToProps(dispatch) {
  return {
    downloadActions: bindActionCreators(networkDownloadActions, dispatch),
    networkActions: bindActionCreators(networkActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NetworkView)
