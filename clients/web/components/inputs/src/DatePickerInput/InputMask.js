import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import isArray from 'lodash/isArray'
import get from 'lodash/get'
import first from 'lodash/first'
import MaskedInput from 'react-text-mask'
import moment from 'moment/moment'
import CalendarPicker from '@conheca-meta-clients/react-pickers/src/components/CalendarPicker'
import {
  dateFormat, momentFriendlyDateFormat, momentBackDateFormat, dateMask
} from '@conheca-meta-clients/react-pickers/src/utils'

import useStyles from './styles'

const InputMask = (props) => {
  const {
    inputRef,
    value,
    maxDate,
    minDate,
    writeText,
    openCalendar,
    disabled,
    ...otherProps
    // inputRef
  } = props

  const classes = useStyles()

  let date = value

  if (isEmpty(value)) {
    date = null
  } else {
    // test if value is the backend format for transform to friendly format
    const test = moment(value, momentBackDateFormat, true)
    if (test.isValid()) {
      date = test.format(momentFriendlyDateFormat)
    }
  }

  const onDataChange = (customDate, config) => {
    const { onChange } = props

    if (isArray(customDate)) {
      customDate = first(customDate)
    }

    const manual = get(config, 'manual', false)
    const test = moment(customDate, manual ? momentFriendlyDateFormat : undefined, true)
    if (test.isValid()) {
      customDate = test.format(momentBackDateFormat)
    }

    onChange({
      target: {
        value: customDate
      }
    })
  }

  return (
    <CalendarPicker
      value={ date }
      onChange={ onDataChange }
      options={ {
        mode: 'single',
        wrap: true,
        allowInput: writeText,
        clickOpens: openCalendar,
        dateFormat,
        maxDate,
        minDate
      } }
    >
      <MaskedInput
        // ref={ inputRef }
        data-input
        mask={ dateMask }
        guide={ false }
        autoComplete="off"
        value={ date }
        className={ [
          classes.input,
          isEmpty(date) ? classes.inputEmpty : null,
          disabled ? classes.inputDisabled : null
        ].join(' ') }
        onChange={ ({ target: { value: newValue } }) => onDataChange(newValue, { manual: true }) }
        { ...otherProps }
      />
    </CalendarPicker>
  )
}

InputMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]).isRequired,
  onChange: PropTypes.func.isRequired,
  writeText: PropTypes.bool.isRequired,
  openCalendar: PropTypes.bool.isRequired,
  maxDate: PropTypes.string.isRequired,
  minDate: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

InputMask.defaultProps = {
  disabled: false
}

export default InputMask
