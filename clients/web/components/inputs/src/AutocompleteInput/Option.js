import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from '@material-ui/core/MenuItem'

function Option(props) {
  return (
    <MenuItem
      ref={ props.innerRef }
      selected={ props.isFocused }
      component="div"
      style={ {
        fontWeight: props.isSelected ? 500 : 400
      } }
      { ...props.innerProps }
    >
      {props.children}
    </MenuItem>
  )
}

Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.shape(),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape()]),
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool
}

Option.defaultProps = {
  children: () => null,
  innerProps: {},
  innerRef: () => null,
  isFocused: false,
  isSelected: false
}

export default Option
