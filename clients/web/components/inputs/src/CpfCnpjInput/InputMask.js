import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import trimMask from '@meta-awesome/functions/src/trimMask'

const InputMask = (props) => {
  const {
    inputRef,
    onlyCpf,
    onlyCnpj,
    guide,
    trim,
    onChange,
    ...otherProps
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

  const cpfSize = trim ? 12 : 15
  let mask
  // aqui nao contabiliza a mascara
  if (value.length < cpfSize && !onlyCnpj) {
    // marcara de CPF
    // o digito a mais no final permite que a mascara altere para CNPJ
    mask = [
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/
    ]
  } else if (!onlyCpf) {
    // mascara de CNPJ
    mask = [
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '/',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/
    ]
  }

  return (
    <MaskedInput
      mask={ mask }
      guide={ guide }
      value={ value }
      onChange={ handlerChange }
      { ...otherProps }
    />
  )
}

InputMask.propTypes = {
  inputRef: PropTypes.func.isRequired,
  /** - */
  name: PropTypes.string.isRequired,
  /** - */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** - */
  guide: PropTypes.bool.isRequired,
  /** unction that will be executed onChange. */
  onChange: PropTypes.func.isRequired,
  /** If 'true' just shows 'CNPJ'. */
  onlyCnpj: PropTypes.bool.isRequired,
  /** If 'true' just shows 'CPF'. */
  onlyCpf: PropTypes.bool.isRequired,
  /** If 'true' return value without mask on change event. */
  trim: PropTypes.bool.isRequired
}

export default InputMask
