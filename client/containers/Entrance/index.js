import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TopPage from '../../components/TopPage'

import style from './style.css'
import * as Colors from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({

  palette: {
    primary1Color: Colors.orange800,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.fullWhite,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    pickerHeaderColor: Colors.cyan500,
  },
  appBar: {
    color: 'rgba(0,0,0,0.0)',
    boxShadow: '0 0'
  }
});

class Entrance extends Component {
  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <TopPage className={style.main} />
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
