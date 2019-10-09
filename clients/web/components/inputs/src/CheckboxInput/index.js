import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
// import { useStyles } from './styles'

const CheckboxInput = (props) => {
  const {
    label, error, helperText, required, checked, ...otherProps
  } = props

  // const classes = useStyles()

  return (
    <FormControl error={ error } required={ required }>
      <FormControlLabel control={ <Checkbox color="primary" checked={ !!checked } { ...otherProps } /> } label={ label } />
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    </FormControl>
  )
}

CheckboxInput.propTypes = {
  label: PropTypes.any,
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  error: PropTypes.bool,
  required: PropTypes.bool,
  helperText: PropTypes.string
}

CheckboxInput.defaultProps = {
  label: '',
  checked: false,
  error: false,
  required: false,
  helperText: null
}

export default CheckboxInput
