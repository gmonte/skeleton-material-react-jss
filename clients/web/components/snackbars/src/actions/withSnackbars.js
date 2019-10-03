/* eslint-disable no-underscore-dangle */
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { SnackbarProvider, withSnackbar } from 'notistack'
import SnackbarController from '../controllers/SnackbarController'

import styles from './styles'

const withSnackbars = (configs = { maxSnack: 5 }) => WrappedComponent => (props) => {
  const Component = withSnackbar((notistack) => {
    window.snackbar = new SnackbarController(notistack)
    return <WrappedComponent { ...props } />
  })

  const Result = withStyles(styles)(styleProps => (
    <SnackbarProvider { ...configs } { ...styleProps }>
      <Component />
    </SnackbarProvider>
  ))

  return <Result />
}

export default withSnackbars
