import React, { useEffect, useState, useContext } from 'react'
import { I18nContext } from '@meta-react/i18n'
import PropTypes from 'prop-types'

const Form = (props) => {
  const {
    form,
    ...otherProps
  } = props

  const { formatMessage } = useContext(I18nContext)

  const { hasValidationErrors, submitFailed } = form.getState()
  const [snackbar, setSnackbar] = useState(null)

  useEffect(() => {
    let snack = null
    if (hasValidationErrors && submitFailed) {
      snack = window.snackbar.warn(formatMessage({ id: 'exist errors into the form' }), {
        persist: true,
        closeButton: true
      })
    } else if (snackbar) {
      snackbar.close()
    }
    setSnackbar(snack)
  }, [hasValidationErrors, submitFailed])

  return <form { ...otherProps } noValidate />
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  form: PropTypes.shape()
}

Form.defaultProps = {
  onSubmit: () => {},
  form: {
    getState: () => ({ submitFailed: false })
  }
}

export default Form
