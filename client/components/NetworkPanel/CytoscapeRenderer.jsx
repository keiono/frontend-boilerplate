import React from "react"
import cytoscape from "cytoscape"
import {DEF_VISUAL_STYLE} from "./VisualStyle"

// TODO: consolidate Cytoscape-dependent tags
const CYTOSCAPE_TAG = 'cy';

// Original position will be used when layout is positions are available
const DEF_LAYOUT = 'preset';

// Layout to be used when there is no layout information
const DEF_NO_LAYOUT = 'cose';


const style ={
  height: '1000px',
  width: '100%',
  backgroundColor: '#EFEFEF'
}


class CytoscapeRenderer extends React.Component {

  updateCyjs(networkData) {
    console.log('* Cytoscape.js is rendering new network...');
    console.log(networkData);

    let network = networkData.toJS()
    console.log(network)

    let visualStyle = DEF_VISUAL_STYLE
    let layout = DEF_LAYOUT

    if (visualStyle === undefined || visualStyle === null) {
      visualStyle = DEF_VISUAL_STYLE
      layout = DEF_NO_LAYOUT
    }


    this.cy = cytoscape(
      Object.assign(
        // this.props.renderOptions,
        {
          container: document.getElementById(CYTOSCAPE_TAG),
          elements: network.elements,
          style: visualStyle,
          layout: {
            name: layout
          }

        }));
  }

  componentDidMount() {
    console.log("=========== N!!!!!!!!!!! NIUNTO DATA");
  }

  componentWillReceiveProps(nextProps) {
    console.log("*****Network prop changed, updating cytoscapejs")
    console.log(nextProps)

    if (nextProps === undefined || nextProps.networkData === undefined) {
      console.log("=========== NO DATA");
      return
    }

    if (nextProps.networkData.equals(this.props.networkData)) {
      console.log("Network unchanged, not updating cytoscapejs");
      return
    } else {
      this.updateCyjs(nextProps.networkData)
    }
  }

  render() {
    console.log('rendering Cytoscape js network---')
    return (
      <div id={CYTOSCAPE_TAG} style={style} />
    )
  }
}

export default CytoscapeRenderer
