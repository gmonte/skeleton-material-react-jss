import { lazy } from 'react'

const LoginScreen = lazy(() => import('../screens/guest/LoginScreen'))

const routes = {
  login: {
    path: '/',
    exact: true,
    Component: LoginScreen
  }
}

export default routes
