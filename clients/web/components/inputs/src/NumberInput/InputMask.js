import React from 'react'
import PropTypes from 'prop-types'
import fill from 'lodash/fill'
import MaskedInput from 'react-text-mask'

const InputMask = (props) => {
  const { inputRef, maxLength, ...otherProps } = props

  const mask = fill(Array(maxLength), /\d/)

  return <MaskedInput mask={ mask } maxLength={ maxLength } { ...otherProps } />
}

InputMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
  /** - */
  name: PropTypes.string.isRequired,
  /** - */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** - */
  guide: PropTypes.bool.isRequired,
  /** function that will be execute onChange. */
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired
}

export default InputMask
