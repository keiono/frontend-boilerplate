import React, {Component} from 'react'

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MainMenu from '../MainMenu'
import IconButton from 'material-ui/IconButton';
import ShareIcon from 'material-ui/svg-icons/social/share';
import NetworkPanel from '../NetworkPanel'
import ShareDialog from '../ShareDialog'
import StyleSelector from '../StyleSelector'


const iconStyle2 = {
  marginTop: 5,
  padding: 0,
  width: 43,
  height: 43,
  color: "#FFFFFF"
}

const iconStyle = {
  margin: 0,
  width: 40,
  height: 40
}


const style = {
  margine: 0,
  padding: 0
};

const dStyle = {
  padding: 10,
};


class Header2 extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false, shareDialogOpen: false}
  }

  openMenu = () => this.setState({open: !this.state.open});

  handleHome() {
    console.log("Back to home")
  }

  handleShareDialogOpen = () => {
    this.setState({ shareDialogOpen: !this.state.shareDialogOpen })
    console.log('Dialog state: ' + this.state.shareDialogOpen)
  };

  handleClose = () => this.setState({open: false});

  render() {
    return (

      <div>
        <AppBar
          title="C4"
          iconElementLeft={
            <IconButton
              style={style}
              iconStyle={iconStyle}
              onTouchTap={this.openMenu}
              disableTouchRipple={true}
            >
            <img src="../../assets/images/cytoscape-logo-white.svg"/>
          </IconButton>
          }
        >

          <StyleSelector />

          <IconButton
            style={iconStyle2}
            iconStyle={iconStyle2}
            onTouchTap={this.handleShareDialogOpen}
          >
            <ShareIcon/>
          </IconButton>

        </AppBar>

        <NetworkPanel />
        <ShareDialog />


        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          style={dStyle}
          width={400}
        >
          <MainMenu/>
        </Drawer>
      </div>

    )
  }
}

export default Header2
