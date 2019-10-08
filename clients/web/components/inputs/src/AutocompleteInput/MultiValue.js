import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Chip from '@material-ui/core/Chip'
import CloseIcon from '@conheca-meta-clients/react-icons/src/CloseIcon'

function MultiValue(props) {
  return (
    <Chip
      tabIndex={ -1 }
      label={ props.children }
      className={ clsx(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      }) }
      onDelete={ props.removeProps.onClick }
      deleteIcon={ <CloseIcon { ...props.removeProps } /> }
    />
  )
}

MultiValue.propTypes = {
  children: PropTypes.node,
  isFocused: PropTypes.bool,
  removeProps: PropTypes.shape().isRequired,
  selectProps: PropTypes.shape().isRequired
}

MultiValue.defaultProps = {
  children: null,
  isFocused: false
}

export default MultiValue
