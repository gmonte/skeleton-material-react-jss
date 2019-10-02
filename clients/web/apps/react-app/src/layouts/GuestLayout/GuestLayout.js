import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class GuestLayout extends PureComponent {
  render() {
    const {
      children
    } = this.props

    return (
      <div>
        <h2>Guest Layout</h2>
        <div>{children}</div>
      </div>
    )
  }
}

GuestLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default GuestLayout
