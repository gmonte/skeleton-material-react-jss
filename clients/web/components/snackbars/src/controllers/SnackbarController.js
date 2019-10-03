/* eslint-disable no-underscore-dangle */
import Snackbar from './Snackbar'

class SnackbarController {
  constructor(notistack) {
    this._notistack = notistack
  }

  _createSnackbar = (message, options) => new Snackbar(
    message,
    options,
    this._notistack
  )

  default = (message, options) => this._createSnackbar(
    message,
    {
      closeOnClick: true,
      ...options,
      variant: 'default'
    }
  )

  success = (message, options = {}) => this._createSnackbar(
    message,
    {
      closeOnClick: true,
      ...options,
      variant: 'success'
    }
  )

  warn = (message, options = {}) => this._createSnackbar(
    message,
    {
      autoHideDuration: 7000,
      copyButton: true,
      closeOnClick: true,
      ...options,
      variant: 'warning'
    }
  )

  error = (message, options = {}) => this._createSnackbar(
    message,
    {
      copyButton: true,
      closeButton: true,
      persist: true,
      ...options,
      variant: 'error'
    }
  )

  info = (message, options = {}) => this._createSnackbar(
    message,
    {
      closeOnClick: true,
      ...options,
      variant: 'info'
    }
  )
}

export default SnackbarController
