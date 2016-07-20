import React, {Component} from 'react'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const items = [
  <MenuItem key={1} value={1} primaryText="default"/>,
  <MenuItem key={2} value={2} primaryText="Style 1"/>,
  <MenuItem key={3} value={3} primaryText="Directed"/>,
];


const style = {
  color: '#FFFFFF',
  fontWeight: 400
}

class StyleSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {value: null};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          labelStyle={style}
          value={this.state.value}
          onChange={this.handleChange}
          floatingLabelText="Visual Style"
          floatingLabelStyle={{color: 'white'}}
        >
          {items}
        </SelectField>
      </div>
    )
  }
}

export default StyleSelector