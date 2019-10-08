import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

function NoOptionsMessage(props) {
  return (
    <Typography color="textSecondary" className={ props.selectProps.classes.noOptionsMessage } { ...props.innerProps }>
      {props.children}
    </Typography>
  )
}

NoOptionsMessage.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.shape(),
  selectProps: PropTypes.shape().isRequired
}

NoOptionsMessage.defaultProps = {
  children: () => null,
  innerProps: {}
}

export default NoOptionsMessage
