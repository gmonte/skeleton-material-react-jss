import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import { withStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import { LinearLoader } from '@conheca-meta-clients/react-loaders'
import HeaderTitleClose from './HeaderTitleClose'
import { DialogPortalContext } from '../DialogPortalProvider'

import styles from './styles'

const Modal = (props) => {
  const {
    classes,
    contentText,
    children: ContentComponentMounted,
    contentComponent: ContentComponent,
    contentComponentProps,
    escape,
    dialogId,
    loading,
    title,
    FooterComponent,
    dialogProps,
    dialogContentProps,
    position,
    onClose,
    ...otherProps
  } = props

  const { closeDialog } = useContext(DialogPortalContext)

  const handleClose = () => {
    closeDialog(dialogId)
    onClose()
  }

  const componentsProps = {
    handleClose,
    title,
    escape
  }

  let dialogPosition = null
  if (position === 'top') {
    dialogPosition = classes.dialogTop
  }

  return (
    <Dialog
      onClose={ handleClose }
      disableEscapeKeyDown={ !escape }
      disableBackdropClick={ !escape }
      { ...dialogProps }
      classes={ {
        ...get(dialogProps, 'classes', {}),
        scrollPaper: [get(dialogProps, 'classes.scrollPaper'), dialogPosition].join(' ')
      } }
      { ...otherProps }
    >
      <HeaderTitleClose { ...componentsProps } />

      <DialogContent { ...dialogContentProps }>
        <div className={ classes.contentText }>{contentText}</div>
        {ContentComponentMounted}
        <ContentComponent dialogId={ dialogId } { ...contentComponentProps } />
      </DialogContent>

      <FooterComponent { ...componentsProps } />

      <LinearLoader visible={ loading } loading={ loading } />
    </Dialog>
  )
}

Modal.propTypes = {
  classes: PropTypes.object.isRequired,
  dialogId: PropTypes.string.isRequired,
  title: PropTypes.string,
  FooterComponent: PropTypes.func,
  contentText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.element,
  contentComponent: PropTypes.func,
  contentComponentProps: PropTypes.object,
  dialogProps: PropTypes.object,
  dialogContentProps: PropTypes.object,
  escape: PropTypes.bool,
  loading: PropTypes.bool,
  onClose: PropTypes.func,
  position: PropTypes.oneOf(['middle', 'top'])
}

Modal.defaultProps = {
  title: '',
  FooterComponent: () => null,
  contentText: null,
  children: null,
  contentComponent: () => null,
  dialogProps: {},
  dialogContentProps: {},
  contentComponentProps: {},
  escape: true,
  loading: false,
  onClose: () => {},
  position: 'middle'
}

export default withStyles(styles)(Modal)
