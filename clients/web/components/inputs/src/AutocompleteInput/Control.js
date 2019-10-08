import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../TextInput'

function inputComponent({ inputRef, ...props }) {
  return <div ref={ inputRef } { ...props } />
}

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape()])
}

inputComponent.defaultProps = {
  inputRef: () => null
}

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps }
  } = props

  return (
    <TextInput
      fullWidth
      InputProps={ {
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps
        }
      } }
      { ...TextFieldProps }
    />
  )
}

Control.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.shape(),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape()]),
  selectProps: PropTypes.shape().isRequired
}

Control.defaultProps = {
  children: () => null,
  innerProps: {},
  innerRef: () => null
}

export default Control
