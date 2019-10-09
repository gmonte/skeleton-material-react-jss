import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

function Placeholder(props) {
  return (
    <Typography color="textSecondary" className={ props.selectProps.classes.placeholder } { ...props.innerProps }>
      {props.children}
    </Typography>
  )
}

Placeholder.propTypes = {
  selectProps: PropTypes.shape().isRequired,
  children: PropTypes.node,
  innerProps: PropTypes.shape()
}

Placeholder.defaultProps = {
  children: () => null,
  innerProps: {}
}

export default Placeholder
