import React, {Component} from 'react'
import CytoscapeRenderer from './CytoscapeRenderer'


class NetworkPanel extends Component {

  constructor(props, context) {
    super(props, context)
  }


  componentWillMount() {
    console.log('renderer---------------')
    console.log(this.props)
    this.props.downloadActions.downloadBegin()
    this.props.downloadActions.download(this.props.networkUrl)
  }

  render() {

    console.log('renderer2---------------')
    console.log(this.props)
    return (
      <div>
        <h1>test</h1>
      </div>
    )
  }
}

export default NetworkPanel
