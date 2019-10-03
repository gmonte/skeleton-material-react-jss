import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

const SnackbarActionsContainer = (props) => {
  const {
    classes,
    children
  } = props

  return (
    <div className={ classes.container }>
      { children }
    </div>
  )
}

SnackbarActionsContainer.propTypes = {
  classes: PropTypes.shape().isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}

SnackbarActionsContainer.defaultProps = {
  children: null
}

export default withStyles(styles)(SnackbarActionsContainer)
