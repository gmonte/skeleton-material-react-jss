import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'

const RadioGroupInput = (props) => {
  const {
    options, value, onChange, label, name, error, disabled, color
  } = props

  return (
    <FormControl error={ error } component="fieldset">
      <FormLabel component="legend">
        <Typography color={ color }>{label}</Typography>
      </FormLabel>
      <RadioGroup disabled={ disabled } aria-label={ name } name={ name } value={ value } onChange={ onChange }>
        {map(options, option => (
          <FormControlLabel
            key={ option.value }
            value={ option.value }
            control={ <Radio color={ color } /> }
            label={ option.label }
            labelPlacement="end"
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

RadioGroupInput.propTypes = {
  /** value of active radio option */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any
    })
  ),
  /** value of active radio option */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  /** function that will be execute onChange. */
  onChange: PropTypes.func,
  /** label of radio group */
  label: PropTypes.string,
  /** name of radio group */
  name: PropTypes.string,
  /** - */
  error: PropTypes.bool,
  /** - */
  disabled: PropTypes.bool,
  color: PropTypes.string
}

RadioGroupInput.defaultProps = {
  options: [],
  value: null,
  onChange: () => {},
  label: '',
  name: 'radioGroup',
  error: false,
  disabled: false,
  color: 'primary'
}

export default RadioGroupInput
