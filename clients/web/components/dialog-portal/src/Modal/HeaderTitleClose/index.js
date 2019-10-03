import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle'
import CloseIconButton from '@conheca-meta-clients/react-icon-buttons/src/components/CloseIconButton'

import styles from './styles'

const HeaderTitleClose = (props) => {
  const {
    classes, title, disableTypography, titleClass, handleClose, escape
  } = props

  return (
    <div className={ classes.header }>
      <DialogTitle className={ [classes.title, titleClass].join(' ') } disableTypography={ disableTypography }>
        {title}
      </DialogTitle>
      {escape ? <CloseIconButton marginHorizontal marginVertical onClick={ handleClose } /> : null}
    </div>
  )
}

HeaderTitleClose.propTypes = {
  classes: PropTypes.object.isRequired,
  escape: PropTypes.bool.isRequired,
  disableTypography: PropTypes.bool,
  titleClass: PropTypes.string,
  title: PropTypes.string,
  handleClose: PropTypes.func
}

HeaderTitleClose.defaultProps = {
  disableTypography: false,
  title: null,
  titleClass: null,
  handleClose: () => {}
}

export default withStyles(styles)(HeaderTitleClose)
