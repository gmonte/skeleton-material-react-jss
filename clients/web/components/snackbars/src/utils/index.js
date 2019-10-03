import lowerCase from 'lodash/lowerCase'

export const initSnackbarByType = (type, message = '') => {
  // Mapeia type retornado da API
  let initSnackbar
  switch (lowerCase(type)) {
    case 'success':
      initSnackbar = window.snackbar.success
      break
    case 'warn':
      initSnackbar = window.snackbar.warn
      break
    case 'error':
      initSnackbar = window.snackbar.error
      break
    case 'info':
      initSnackbar = window.snackbar.info
      break
    default:
      initSnackbar = window.snackbar.default
      break
  }

  return initSnackbar(message)
}
