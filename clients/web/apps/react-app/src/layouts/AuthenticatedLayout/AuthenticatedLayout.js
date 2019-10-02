import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class AuthenticatedLayout extends PureComponent {
  render() {
    const {
      children
    } = this.props

    return (
      <div>
        <h2>Authenticated Layout</h2>
        <div>{children}</div>
      </div>
    )
  }
}

AuthenticatedLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default AuthenticatedLayout
