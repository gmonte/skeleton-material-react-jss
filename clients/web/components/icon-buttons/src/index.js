import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import debounce from 'lodash/debounce'
import MuiIconButton from '@material-ui/core/IconButton'
import CircularProgress from '@material-ui/core/CircularProgress'
import PopoverOver from '@conheca-meta-clients/react-popovers/src/components/PopoverOver'
import Tooltip from '@conheca-meta-clients/react-tooltip'

import useStyles from './styles'

const IconButton = (props) => {
  const {
    withOpacity,
    children,
    className,
    popover,
    tooltip,
    popoverProps,
    marginVertical,
    marginHorizontal,
    shadow,
    size,
    loading,
    styleVariant,
    placement,
    debounce: _,
    debounceReverse,
    ...otherProps
    // type
  } = props

  const [popoverId] = useState(props.popover ? Math.floor(Math.random() * 1000).toString() : null)

  const btnRef = useRef(null)

  const classes = useStyles()

  let onClick = (e) => {
    props.onClick(e)
  }

  if (props.debounce) {
    let debounceConfig = {}
    if (props.debounceReverse) {
      debounceConfig = {
        leading: true,
        trailing: false
      }
    }
    onClick = debounce(onClick, props.debounce, debounceConfig)
  }

  const classesNames = []

  if (shadow) {
    classesNames.push(classes.btnShadow)
  }
  if (size === 'mini') {
    classesNames.push(classes.mini)
  }
  if (size === 'none') {
    classesNames.push(classes.none)
  }
  if (withOpacity) {
    classesNames.push(classes.withOpacity)
  }
  if (!isEmpty(classes[styleVariant])) {
    classesNames.push(classes[styleVariant])
  }
  if (className) {
    classesNames.push(className)
  }

  let button = (
    <span
      key="iconButton"
      ref={ btnRef }
      aria-owns={ popoverId }
      aria-haspopup={ popover.toString() }
      className={ classes.spanIconButton }
    >
      <MuiIconButton { ...otherProps } className={ classesNames.join(' ') } onClick={ loading ? () => {} : onClick }>
        {loading ? <CircularProgress color="inherit" size={ 22 } /> : children}
      </MuiIconButton>
    </span>
  )

  if (!isEmpty(tooltip)) {
    button = (
      <Tooltip title={ tooltip } placement={ placement }>
        {button}
      </Tooltip>
    )
  }
  if (marginVertical || marginHorizontal) {
    button = (
      <div
        className={ [
          marginHorizontal ? classes.iconButtonMarginHorizontal : null,
          marginVertical ? classes.iconButtonMarginVertical : null
        ].join(' ') }
      >
        {button}
      </div>
    )
  }

  return popover
    ? [button, <PopoverOver key="popover" popoverId={ popoverId } { ...popoverProps } anchorEl={ btnRef } />]
    : button
}

IconButton.propTypes = {
  withOpacity: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func,
  popover: PropTypes.bool,
  popoverProps: PropTypes.shape(),
  tooltip: PropTypes.string,
  className: PropTypes.string,
  marginVertical: PropTypes.bool,
  marginHorizontal: PropTypes.bool,
  shadow: PropTypes.bool,
  size: PropTypes.oneOf(['normal', 'mini', 'none']),
  loading: PropTypes.bool,
  debounce: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  debounceReverse: PropTypes.bool,
  styleVariant: PropTypes.string,
  placement: PropTypes.string,
  /** Used to control the button's purpose,
   This property passes the value to the type attribute of the native button component. */
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
}

IconButton.defaultProps = {
  withOpacity: false,
  children: '',
  onClick: () => {},
  popover: false,
  popoverProps: {},
  tooltip: null,
  className: null,
  marginVertical: false,
  marginHorizontal: true,
  shadow: false,
  size: 'normal',
  loading: false,
  debounce: 200,
  debounceReverse: false,
  styleVariant: null,
  placement: 'bottom',
  type: 'button'
}

export default IconButton
