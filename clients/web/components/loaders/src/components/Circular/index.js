import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useStyles } from './styles'

function CircularIndeterminate(props) {
  const {
    size, label, marginTop, style, className, ...otherProps
  } = props

  const classes = useStyles()

  return (
    <div className={ classes.labeledLoaderContainer }>
      <CircularProgress
        size={ size }
        className={ [classes.progress, className].join(' ') }
        style={ {
          ...style,
          marginTop: marginTop || undefined
        } }
        variant="indeterminate"
        { ...otherProps }
      />
      {!isEmpty(label) ? <span className={ classes.label }>{label}</span> : null}
    </div>
  )
}

CircularIndeterminate.propTypes = {
  size: PropTypes.number,
  label: PropTypes.string,
  marginTop: PropTypes.number,
  style: PropTypes.shape(),
  className: PropTypes.string
}

CircularIndeterminate.defaultProps = {
  size: 40,
  label: '',
  marginTop: 30,
  style: {},
  className: null
}

export default CircularIndeterminate
