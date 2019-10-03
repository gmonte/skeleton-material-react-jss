import React, { Suspense } from 'react'
import flow from 'lodash/fp/flow'
import withSnackbars from '@conheca-meta-clients/react-snackbars/src/actions/withSnackbars'
import { withStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAuthenticated } from '@conheca-meta-clients/store/src/selectors/auth'
import supportsHistory from '@meta-awesome/functions/src/supportsHistory'
import { DialogPortalProvider } from '@conheca-meta-clients/react-dialog-portal'
import AuthenticatedScreenRouter from './authenticated/AuthenticatedScreenRouter'
import GuestScreenRouter from './guest/GuestScreenRouter'
import globalStyles from '../styles/globalStyles'

const forceRefresh = !supportsHistory()

const ScreenRouter = () => {
  const authenticated = useSelector(selectAuthenticated)
  const RouterContext = authenticated ? AuthenticatedScreenRouter : GuestScreenRouter // todo remover ! da operação

  return (
    <Router forceRefresh={ forceRefresh }>
      <DialogPortalProvider>
        <Suspense fallback={ <div /> }>
          <RouterContext />
        </Suspense>
      </DialogPortalProvider>
    </Router>
  )
}

export default flow(
  withStyles(globalStyles),
  withSnackbars()
)(ScreenRouter)