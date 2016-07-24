import React, {Component} from 'react'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

import ShareIcon from 'material-ui/svg-icons/social/share';

const style = {
  width: 400
}


export default class ShareDialog extends Component {
  constructor(props) {
    super(props);
    console.log('-----------CONST######==========')
    console.log(props)

  }

  componentWillUpdate(nextProps, nextState) {
    console.log('-----------Froparent==========')
    console.log(this.props)
    console.log(nextProps)
    console.log(nextState)

  }

  handleClose = () => {
  }

  render() {

    console.log('************dialog')
    console.log(this.props)

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
        onTouchTap={this.props.onTouchTap}
      />
    ];

    return (
      <Dialog
        contentStyle={style}
        actions={actions}
        modal={false}
        open={this.props.open}
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
