import React from "react"
import cytoscape from "cytoscape"
import {DEF_VISUAL_STYLE} from "./VisualStyle"
import style from './style.css'

// TODO: consolidate Cytoscape-dependent tags
const CYTOSCAPE_TAG = 'cy';

// Original position will be used when layout is positions are available
const DEF_LAYOUT = 'preset';

// Layout to be used when there is no layout information
const DEF_NO_LAYOUT = 'cose';

const CY_EVENTS = {
  select: "select",
  unselect: 'unselect',
  add: 'add',
  remove: 'remove'
}


export default class CytoscapeRenderer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      rendered: false
    }
  }

  updateCyjs(networkData) {
    console.log('* Cytoscape.js is rendering new network...')
    this.state.rendered = true

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

    this.setEventListener()
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log("$$$$$$$$$ Checking props")
    if (nextProps.networkData === this.props.networkData) {
      return false
    }
    console.log("********** UPDATE **********")
    return true
  }

  componentWillReceiveProps(nextProps) {
    console.log("*****Network prop changed, updating cytoscapejs")
    console.log(nextProps)
    console.log(this.props)

    if (nextProps === undefined || nextProps.networkData === undefined) {
      console.log("=========== NO DATA");
      return
    }

    if (nextProps.networkData === this.props.networkData
      && this.state.rendered === true) {
      return
    }
    this.updateCyjs(nextProps.networkData)
  }

  render() {
    console.log('rendering Cytoscape js network---')
    return (
      <div id={CYTOSCAPE_TAG} className={style.cy}/>
    )
  }

  setEventListener() {
    this.cy.on('data select unselect add remove', ev => {
      switch (ev.originalEvent.type) {
        case CY_EVENTS.select:
          let selected = ev.cyTarget;
          this.handleSelect(selected)
          break
        case CY_EVENTS.unselect:
          let unselected = ev.cyTarget;
          this.handleSelect(unselected)
          break
        default:
          break
      }
    })
  }

  handleSelect(selected) {
    console.log('--------- selected')
    console.log(selected)
  }
}
