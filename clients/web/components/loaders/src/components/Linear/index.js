import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

import styles from './styles'

const Linear = (props) => {
  const {
    classes, visible, loading, value, className
  } = props

  if (!visible) {
    return null
  }

  const otherProps = {}
  if (!loading) {
    otherProps.value = value === 0 ? 0 : 100
    otherProps.variant = 'determinate'
  }

  return (
    <div className={ classes.root }>
      <LinearProgress
        color="primary"
        classes={ { root: [classes.linearProgress, className].join(' ') } }
        { ...otherProps }
      />
    </div>
  )
}

Linear.propTypes = {
  classes: PropTypes.shape().isRequired,
  visible: PropTypes.bool,
  loading: PropTypes.bool,
  value: PropTypes.number,
  className: PropTypes.string
}

Linear.defaultProps = {
  visible: false,
  loading: true,
  value: undefined,
  className: null
}

export default withStyles(styles)(Linear)
