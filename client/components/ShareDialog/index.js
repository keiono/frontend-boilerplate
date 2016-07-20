import React, {Component} from 'react'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

import ShareIcon from 'material-ui/svg-icons/social/share';

const style = {
  width: 400
}


class ShareDialog extends Component {

  state = {
    open: true,
  };


  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        icon={<ShareIcon />}
        label="Share"
        primary={true}
        onTouchTap={this.handleClose}
      />
    ];

    return (
      <Dialog
        contentStyle={style}
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose} >

        <img src="../../assets/images/cytoscape-logo-orange.svg" width="40px"/>
        <h2>
          Share Network as URL
        </h2>
        <TextField
          id="text-field-default"
          defaultValue="Encoded URL will be displayed here..."
        />

      </Dialog>
    );
  }
}

export default ShareDialog
