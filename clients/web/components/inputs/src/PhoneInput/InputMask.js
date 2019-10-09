import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import trimMask from '@meta-awesome/functions/src/trimMask'

const InputMask = (props) => {
  const {
    inputRef, guide, trim, onChange, ...otherProps
  } = props

  let { value } = props

  let handlerChange = onChange
  if (trim) {
    value = trimMask(value)
    handlerChange = (event) => {
      onChange({
        ...event,
        target: {
          ...event.target,
          value: trimMask(event.target.value)
        }
      })
    }
  }

  const phoneSize = trim ? 10 : 14
  let mask
  // aqui nao contabiliza a mascara
  if (value.length <= phoneSize) {
    // o digito a mais no final permite que a mascara altere
    mask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/]
  } else {
    // mascara de CNPJ
    mask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  }

  return <MaskedInput mask={ mask } guide={ guide } value={ value } onChange={ handlerChange } { ...otherProps } />
}

InputMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
  /** - */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** - */
  guide: PropTypes.bool.isRequired,
  /** unction that will be executed onChange. */
  onChange: PropTypes.func.isRequired,
  /** If 'true' return value without mask on change event. */
  trim: PropTypes.bool.isRequired
}

export default InputMask
