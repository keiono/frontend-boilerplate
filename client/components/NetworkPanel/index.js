import React, {Component} from 'react'
import CytoscapeRenderer from './CytoscapeRenderer'
import Loading from '../Loading'


import style from './style.css'

export default class NetworkPanel extends Component {

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
    if (url === '' || url !== newUrl) {
      this.props.downloadActions.downloadBegin()
      this.props.downloadActions.download(url)
    }
  }


  render() {
    console.log('called: VIewer renderer---------------')
    const url = this.props.currentNetwork.get('url')
    const network = this.props.networks.get(url)
    console.log(network)

    if (network !== undefined) {
      return (
        <CytoscapeRenderer style={{zIndex: 1}} networkData={network}/>
      )
    } else {
      return (
        <Loading />
      )
    }
  }
}
