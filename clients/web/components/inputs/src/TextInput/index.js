import React, { useState } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import uuid from 'uuid/v1'

import useStyles from './styles'

const TextInput = (props) => {
  const { className, ...otherProps } = props

  const classes = useStyles()

  const [id] = useState(uuid())

  return <TextField id={ id } className={ [classes.textField, className].join(' ') } { ...otherProps } />
}

TextInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string
}

TextInput.defaultProps = {
  type: 'text',
  className: '',
  variant: 'outlined'
}

export default TextInput
