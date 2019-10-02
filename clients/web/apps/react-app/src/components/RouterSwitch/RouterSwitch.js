import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import { Route, Switch, Redirect } from 'react-router-dom'

const RouterSwitch = ({
  routes, escapeTo, ...props
}) => (
  <Switch>
    {map(routes, ({ path, exact, Component }, name) => (
      <Route
        key={ name }
        name={ name }
        path={ path }
        exact={ !!exact }
        component={ screenProps => (
          <Suspense fallback={ <div /> }>
            <Component routes={ routes } { ...{ ...props, ...screenProps } } />
          </Suspense>
        ) }
      />
    ))}
    <Route component={ () => <Redirect to={ escapeTo } /> } />
  </Switch>
)

RouterSwitch.propTypes = {
  routes: PropTypes.shape().isRequired,
  escapeTo: PropTypes.string
}

RouterSwitch.defaultProps = {
  escapeTo: '/'
}

export default RouterSwitch
