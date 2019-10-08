import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../TextInput'
import InputMask from './InputMask'

const PhoneInput = (props) => {
  const {
    value, onChange, guide, trim, ...otherProps
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
        trim
      } }
    />
  )
}

PhoneInput.propTypes = {
  /** - */
  name: PropTypes.string,
  /** - */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** - */
  guide: PropTypes.bool,
  /** function that will be execute onChange. */
  onChange: PropTypes.func.isRequired,
  /** If 'true' return value without mask on change event. */
  trim: PropTypes.bool
}

PhoneInput.defaultProps = {
  name: 'cpfCpnj',
  value: '',
  guide: false,
  trim: false
}

export default PhoneInput
