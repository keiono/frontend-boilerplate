import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import DataSource from '../../components/DataSource'

import style from './style.css'

const muiTheme = getMuiTheme({});

class Entrance extends Component {
  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <DataSource />
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
)(Entrance)
