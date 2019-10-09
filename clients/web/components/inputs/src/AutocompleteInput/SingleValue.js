import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

function SingleValue(props) {
  return (
    <Typography className={ props.selectProps.classes.singleValue } { ...props.innerProps }>
      {props.children}
    </Typography>
  )
}

SingleValue.propTypes = {
  selectProps: PropTypes.shape().isRequired,
  children: PropTypes.node,
  innerProps: PropTypes.shape()
}

SingleValue.defaultProps = {
  children: () => null,
  innerProps: {}
}

export default SingleValue
