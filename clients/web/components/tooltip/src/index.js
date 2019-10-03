import React from 'react'
import TooltipMui from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'

const Tooltip = props => <TooltipMui enterDelay={ 500 } TransitionComponent={ Zoom } { ...props } />

export default Tooltip
