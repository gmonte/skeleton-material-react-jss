import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../TextInput'
import InputMask from './InputMask'

const DatePickerInput = (props) => {
  const {
    value, onChange, writeText, openCalendar, maxDate, minDate, ...otherProps
  } = props

  return (
    <TextInput
      { ...otherProps }
      autoComplete="off"
      type="tel"
      InputProps={ {
        inputComponent: InputMask,
        value,
        onChange
      } }
      inputProps={ {
        writeText,
        openCalendar,
        maxDate,
        minDate
      } }
    />
  )
}

DatePickerInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
  onChange: PropTypes.func.isRequired,
  writeText: PropTypes.bool,
  openCalendar: PropTypes.bool,
  maxDate: PropTypes.string,
  minDate: PropTypes.string
}

DatePickerInput.defaultProps = {
  value: '',
  writeText: true,
  openCalendar: true,
  maxDate: '',
  minDate: ''
}

export default DatePickerInput
