import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../TextInput'
import InputMask from './InputMask'

const CpfCnpjInput = (props) => {
  const {
    value, onChange, onlyCpf, onlyCnpj, guide, trim, ...otherProps
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
        onlyCnpj,
        onlyCpf,
        guide,
        trim
      } }
    />
  )
}

CpfCnpjInput.propTypes = {
  /** - */
  name: PropTypes.string,
  /** - */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** - */
  guide: PropTypes.bool,
  /** function that will be execute onChange. */
  onChange: PropTypes.func.isRequired,
  /** If 'true' just shows 'CNPJ'. */
  onlyCnpj: PropTypes.bool,
  /** If 'true' just shows 'CPF'. */
  onlyCpf: PropTypes.bool,
  /** If 'true' return value without mask on change event. */
  trim: PropTypes.bool
}

CpfCnpjInput.defaultProps = {
  name: 'cpfCpnj',
  value: '',
  guide: false,
  onlyCnpj: false,
  onlyCpf: false,
  trim: false
}

export default CpfCnpjInput
