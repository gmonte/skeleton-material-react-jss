import React from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import map from 'lodash/map'

const DialogPortal = (props) => {
  const {
    getDialogs
  } = props

  const Dialogs = map(getDialogs, ({ component: Dialog, open, componentProps = {} }, dialogId) => (
    <Dialog key={ dialogId } dialogId={ dialogId } open={ open } { ...componentProps } />
  ))

  const node = document.getElementById('dialog-portal')
  return createPortal(Dialogs, node)
}

DialogPortal.propTypes = {
  getDialogs: PropTypes.object.isRequired
}

export default DialogPortal
