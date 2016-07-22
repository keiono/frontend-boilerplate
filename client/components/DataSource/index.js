import React, {Component} from 'react'

import {List, ListItem} from 'material-ui/List';

import Checkbox from 'material-ui/Checkbox';

import style from './style.css'


class DataSource extends Component {

  render() {
    return (
      <div>

        <h1 className={style.title}>
          Cytoscape.next
        </h1>
        <div className={style.logo}>
          <img className={style.logo} src="../../assets/images/cytoscape-logo-orange.svg"/>
        </div>

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