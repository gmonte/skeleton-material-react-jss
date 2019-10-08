import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'

function Menu(props) {
  return (
    <Paper square className={ props.selectProps.classes.paper } { ...props.innerProps }>
      {props.children}
    </Paper>
  )
}

Menu.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.shape(),
  selectProps: PropTypes.shape()
}

Menu.defaultProps = {
  children: () => null,
  innerProps: {},
  selectProps: {}
}

export default Menu
