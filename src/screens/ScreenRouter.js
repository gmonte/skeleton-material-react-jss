import React, { Suspense } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router } from 'react-router-dom'
import supportsHistory from '@meta-awesome/functions/src/supportsHistory'
import GuestScreenRouter from './guest/GuestScreenRouter'
import globalStyles from '../styles/globalStyles'

const forceRefresh = !supportsHistory()

const ScreenRouter = () => (
  <Router forceRefresh={ forceRefresh }>
    <Suspense fallback={ <div /> }>
      <GuestScreenRouter />
    </Suspense>
  </Router>
)

export default withStyles(globalStyles)(ScreenRouter)
