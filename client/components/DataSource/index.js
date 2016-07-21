import React, {Component} from 'react'

import {List, ListItem} from 'material-ui/List';

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

class DataSource extends Component {

  render() {
    return (
      <div style={styles.root}>
        <img src="../../assets/images/cytoscape-logo-orange.svg" width="40px"/>
        <h2>
          Cytoscape.next
        </h2>


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
      </div>

    )
  }
}


export default DataSource;