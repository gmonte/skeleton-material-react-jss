import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Form from '@conheca-meta-clients/react-inputs/src/Form'
import EmailInput from '@conheca-meta-clients/react-inputs/src/EmailInput'
import PasswordInput from '@conheca-meta-clients/react-inputs/src/PasswordInput'
import { useForm, useField } from 'react-final-form-hooks'
import validate from '@meta-awesome/validators'
import validateRequired from '@meta-awesome/validators/src/required'
import validatePassword from '@meta-awesome/validators/src/password'
import validateEmail from '@meta-awesome/validators/src/email'
import I18n, { I18nContext } from '@meta-react/i18n'
import Fab from '@material-ui/core/Fab'
import LoginIcon from '@conheca-meta-clients/react-icons/src/LoginIcon'
import useStyles from './styles'

const validEmail = (value) => {
  const { errorText } = validate(value, validateRequired, validateEmail)
  return errorText || undefined
}

const validPassword = (value) => {
  const { errorText } = validate(value, validateRequired, validatePassword)
  return errorText || undefined
}

const LoginFormContainer = (props) => {
  const {
    onSubmit,
    loading
  } = props

  const { formatMessage } = useContext(I18nContext)
  const classes = useStyles()

  const { form, handleSubmit } = useForm({
    onSubmit
  })

  const fields = {
    email: useField('email', form, validEmail),
    password: useField('password', form, validPassword)
  }

  const getErrorMessage = error => (error ? formatMessage({ id: error }) : null)

  return (
    <Form form={ form } className={ classes.formContainer } onSubmit={ handleSubmit }>
      <EmailInput
        label={ formatMessage({ id: 'email' }) }
        { ...fields.email.input }
        required
        disabled={ loading }
        helperText={ (fields.email.meta.touched ? getErrorMessage(fields.email.meta.error) : '') }
        error={ (fields.email.meta.touched && !!fields.email.meta.error) }
        fullWidth
        autoFocus
      />
      <PasswordInput
        label={ formatMessage({ id: 'password' }) }
        { ...fields.password.input }
        required
        disabled={ loading }
        helperText={ (fields.password.meta.touched ? getErrorMessage(fields.password.meta.error) : '') }
        error={ (fields.password.meta.touched && !!fields.password.meta.error) }
        fullWidth
      />

      <Fab type="submit" variant="extended" color="secondary" aria-label="login" className={ classes.button }>
        <LoginIcon className={ classes.extendedIcon } />
        <I18n>login</I18n>
      </Fab>
    </Form>
  )
}

LoginFormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}

export default LoginFormContainer
