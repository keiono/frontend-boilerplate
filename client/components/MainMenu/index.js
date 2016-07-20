import React, {Component} from 'react'

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  divStyle: {
    width: 500
  }
};

class MainMenu extends Component {

  render() {
    return (
      <div style={styles.root}>
        <List>
          <img src="../../assets/images/cytoscape-logo-orange.svg" width="40px"/>
          <h2>
            Cytoscape.next
          </h2>
          <Divider style={styles.divStyle}/>
          <ListItem
            primaryText="Profile photo"
            secondaryText="Change your Google+ profile photo"
          />
          <ListItem
            primaryText="Show your status"
            secondaryText="Your status is visible to everyone you use with"
          />
        </List>
        <Divider />
        <List>
          <Subheader>Hangout Notifications</Subheader>
          <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Notifications"
            secondaryText="Allow notifications"
          />
          <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Sounds"
            secondaryText="Hangouts message"
          />
          <ListItem
            leftCheckbox={<Checkbox />}
            primaryText="Video sounds"
            secondaryText="Hangouts video call"
          />
        </List>
      </div>

    )
  }
}


export default MainMenu;