import React, { Suspense } from 'react'
// import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAuthenticated } from '@conheca-meta-clients/store/src/selectors/auth'
import supportsHistory from '@meta-awesome/functions/src/supportsHistory'
import AuthenticatedScreenRouter from './authenticated/AuthenticatedScreenRouter'
import GuestScreenRouter from './guest/GuestScreenRouter'

const forceRefresh = !supportsHistory()

const ScreenRouter = () => {
  const authenticated = useSelector(selectAuthenticated)

  const RouterContext = authenticated ? AuthenticatedScreenRouter : GuestScreenRouter // todo remover ! da operação

  return (
    <Router forceRefresh={ forceRefresh }>
      <>
        <Suspense fallback={ <div /> }>
          <RouterContext />
        </Suspense>
      </>
    </Router>
  )
}

// ScreenRouter.propTypes = {

// }

export default ScreenRouter
