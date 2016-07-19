import React, { Component } from 'react'


import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import SvgIcon from 'material-ui/SvgIcon';


const style = {
  margin: 12,
};


class Header2 extends Component {

  handleHome() {
    console.log("Back to home")
  }

  render() {
    return (

      <AppBar
        title='Cytoscpae.next'
        iconClassNameRight="muidocs-icon-navigation-expand-more">

        <FlatButton
          href="https://github.com/callemall/material-ui"
          secondary={true}
          icon={<img src="../../assets/images/cytoscape-logo-white.svg" width="23px"/>}
        />

      </AppBar>

    )
  }
}

export default Header2
