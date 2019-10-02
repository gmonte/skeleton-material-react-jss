import { lazy } from 'react'

import DashboardIcon from '@conheca-meta-clients/react-icons/src/DashboardIcon'

const DashboardScreen = lazy(() => import('../screens/authenticated/DashboardScreen'))

const routes = {
  dashboard: {
    path: '/',
    Icon: DashboardIcon,
    exact: true,
    menu: true,
    Component: DashboardScreen
  }
}

export default routes
