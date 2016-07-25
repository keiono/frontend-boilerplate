import React, {Component} from 'react'
import CytoscapeRenderer from './CytoscapeRenderer'


export default class NetworkPanel extends Component {

  componentDidMount() {
    console.log('renderer---------------')
    console.log(this.props)

    // const url = this.props.currentNetwork.get('url')
    // this.props.downloadActions.downloadBegin()
    // this.props.downloadActions.download(this.props.currentNetwork.get('url'))
  }

  componentWillMount() {
    console.log('WILL mount####   renderer---------------')
    this.props.downloadActions.downloadBegin()
    this.props.downloadActions.download(this.props.currentNetwork.get('url'))
  }

  componentWillReceiveProps(nextProps) {
    console.log('called: NEXT---------------')
    const newUrl = nextProps.currentNetwork.get('url')
    const url = this.props.currentNetwork.get('url')

    console.log(url)
    console.log(newUrl)
    if (url === '' ||  url !== newUrl) {
      this.props.downloadActions.downloadBegin()
      this.props.downloadActions.download(url)
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  getInitialSate() {
    console.log('DOWNLOAD: renderer---------------')

  }


  render() {
    console.log('called: renderer2222---------------')
    const url = this.props.currentNetwork.get('url')
    const network = this.props.networks.get(url)
    console.log(network)

    if (network !== undefined) {
      return (
        <CytoscapeRenderer networkData={network}/>
      )
    } else {
      return (<div />)
    }
  }
}
