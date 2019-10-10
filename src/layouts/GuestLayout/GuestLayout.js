import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

class GuestLayout extends PureComponent {
  render() {
    const {
      children,
      classes
      // history
    } = this.props

    return (
      <div className={ classes.container }>
        <div className={ classes.contentScroll }>{children}</div>
      </div>
    )
  }
}

GuestLayout.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.element.isRequired
}

export default withStyles(styles)(GuestLayout)
