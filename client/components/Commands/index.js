import React, {Component} from 'react'
import style from './style.css'
import classnames from 'classnames'


import FloatingActionButton from 'material-ui/FloatingActionButton'
import FitContent from 'material-ui/svg-icons/maps/zoom-out-map'
import ZoomIn from 'material-ui/svg-icons/action/zoom-in'
import ZoomOut from 'material-ui/svg-icons/action/zoom-out'

export default class Commands extends Component {

  render() {
    return (
      <div className={classnames(style.bar, style.grid)}>
        <FloatingActionButton className={style.command}>
          <ZoomIn />
        </FloatingActionButton>
        <FloatingActionButton className={style.command}>
          <ZoomOut />
        </FloatingActionButton>
        <FloatingActionButton className={style.command}>
          <FitContent />
        </FloatingActionButton>
      </div>
    )
  }
}

