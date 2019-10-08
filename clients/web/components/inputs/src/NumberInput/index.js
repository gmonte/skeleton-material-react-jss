import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../TextInput'
import InputMask from './InputMask'

const NumberInput = (props) => {
  const {
    value, onChange, guide, maxLength, ...otherProps
  } = props

  return (
    <TextInput
      { ...otherProps }
      type="tel"
      InputProps={ {
        inputComponent: InputMask,
        value,
        onChange
      } }
      inputProps={ {
        guide,
        maxLength,
        name: 'number'
      } }
    />
  )
}

NumberInput.propTypes = {
  /** - */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** - */
  guide: PropTypes.bool,
  /** unction that will be executed onChange. */
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number
}

NumberInput.defaultProps = {
  value: '',
  guide: false,
  maxLength: 10
}

export default NumberInput
