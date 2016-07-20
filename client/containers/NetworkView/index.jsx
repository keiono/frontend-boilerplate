import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Header2 from '../../components/Header2'

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

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Header2 />
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NetworkView)
