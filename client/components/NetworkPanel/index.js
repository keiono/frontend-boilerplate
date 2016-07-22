import React, {Component} from 'react'
import CytoscapeRenderer from './CytoscapeRenderer'


const url1 = 'http://ci-dev-serv.ucsd.edu:3001/ndex2cyjs/a54acf93-1300-11e6-9191-0660b7976219?server=dev2'


class NetworkPanel extends Component {


  componentDidMount() {
    console.log('renderer---------------')
    console.log(this.props)

    this.props.downloadActions.downloadBegin()
    this.props.downloadActions.download(url1)
  }

  render() {
    console.log('called: renderer2222---------------')
    console.log(this.props)
    const network = this.props.networks.get(url1)
    console.log(network)
    return (
      <div>
        <h1>test</h1>
        <CytoscapeRenderer networkData={network} />
      </div>
    )
  }
}

export default NetworkPanel
