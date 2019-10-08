import React from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'
import isEmpty from 'lodash/isEmpty'
import isArray from 'lodash/isArray'
import map from 'lodash/map'
import first from 'lodash/first'
import last from 'lodash/last'
import size from 'lodash/size'
// import get from 'lodash/get'
import mapFP from 'lodash/fp/map'
import filter from 'lodash/fp/filter'
import flow from 'lodash/fp/flow'
import moment from 'moment/moment'
import CalendarPicker from '@conheca-meta-clients/react-pickers/src/components/CalendarPicker'
import { dateFormat, momentFriendlyDateFormat, momentBackDateFormat } from '@conheca-meta-clients/react-pickers/src/utils'
import TextInput from '../TextInput'

import useStyles from './styles'

const DateRangePickerInput = (props) => {
  const {
    onChange, onBlur, onFocus, options, disabled, value: _, ...otherProps
  } = props

  let { value } = props

  const initialValue = {
    from: '',
    to: ''
  }

  const classes = useStyles()

  if (isEmpty(value)) {
    // fix first render because useForm from "react-final-form-hooks"
    // doesn't init the value as an object. they send an empty string.
    value = initialValue
  }

  const dates = flow(
    filter(date => !isEmpty(date)),
    mapFP(date => moment(date, momentBackDateFormat).format(momentFriendlyDateFormat))
  )(value)

  const onDataChange = (values) => {
    let from = ''
    let to = ''
    if (isArray(values) && !isEmpty(values)) {
      values = map(values, date => moment(date).format(momentBackDateFormat))
      from = first(values)
      to = size(values) === 2 ? last(values) : ''
    }

    onChange({
      from,
      to
    })

    if (onBlur && size(values) === 2) {
      onBlur()
    }
  }

  const onCloseCalendar = (values) => {
    if (size(values) < 2) {
      onChange({
        from: '',
        to: ''
      })
    }
  }

  return (
    <CalendarPicker
      value={ dates }
      options={ {
        dateFormat,
        mode: 'range',
        wrap: true,
        clickOpens: true,
        onClose: onCloseCalendar,
        ...options
      } }
      onChange={ onDataChange }
    >
      <TextInput
        { ...otherProps }
        disabled={ disabled }
        onClick={ onFocus }
        onBlur={ () => {} }
        onChange={ () => {} }
        autoComplete="off"
        type="tel"
        inputProps={ {
          'data-input': true
        } }
        InputLabelProps={ {
          shrink: !isEqual(value, initialValue)
        } }
        className={ [classes.input, disabled ? classes.inputDisabled : null].join(' ') }
      />
    </CalendarPicker>
  )
}

DateRangePickerInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  options: PropTypes.shape(),
  disabled: PropTypes.bool
}

DateRangePickerInput.defaultProps = {
  value: '',
  options: {},
  disabled: false,
  onBlur: null,
  onFocus: null
}

export default DateRangePickerInput
