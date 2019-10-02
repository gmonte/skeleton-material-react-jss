import React, { Suspense } from 'react'
import { withRouter } from 'react-router-dom'

import GuestLayout from './GuestLayout'
import AuthenticatedLayout from './AuthenticatedLayout'

/**
 * High Order Component that provides Layout to Components
 *
 * @param nextLayout string
 * @returns {function(*): *}
 */
const withLayout = nextLayout => (ScreenRouter) => {
  let LayoutComponent

  switch (nextLayout) {
    case 'guest':
      LayoutComponent = GuestLayout
      break
    case 'authenticated':
      LayoutComponent = AuthenticatedLayout
      break
    default:
      LayoutComponent = () => null
      break
  }

  const wrapped = props => (
    <Suspense fallback={ <div /> }>
      <LayoutComponent { ...props }>
        <ScreenRouter { ...props } />
      </LayoutComponent>
    </Suspense>
  )

  return withRouter(wrapped)
}

export default withLayout
