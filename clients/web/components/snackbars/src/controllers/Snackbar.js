/* eslint-disable no-underscore-dangle */
import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import CopyIconButton from '@conheca-meta-clients/react-icon-buttons/src/components/CopyIconButton'
import CloseIconButton from '@conheca-meta-clients/react-icon-buttons/src/components/CloseIconButton'
import SnackbarActionsContainer from '../components/SnackbarActionsContainer'

class Snackbar {
  constructor(message, options = {}, notistack = {}) {
    this._notistack = notistack
    this.message = message
    this.options = options
    this.key = undefined

    this.open()
  }

  open = () => {
    const {
      closeOnClick, copyButton, closeButton, onClick = () => {}, ...otherOptions
    } = this.options

    let options = {}

    if (closeOnClick) {
      options = {
        onClick: () => {
          onClick(this.key)
          this.close()
        }
      }
    }

    let customOptions = {}
    if (copyButton || closeButton) {
      customOptions = {
        ...customOptions,
        action: (
          <SnackbarActionsContainer>
            {copyButton ? (
              <CopyToClipboard text={ this.message }>
                <CopyIconButton
                  size="mini"
                  color="inherit"
                  onClick={ () => window.snackbar.success('Mensagem copiada com sucesso!') }
                />
              </CopyToClipboard>
            ) : null}
            {closeButton ? <CloseIconButton color="inherit" size="mini" /> : null}
          </SnackbarActionsContainer>
        )
      }
    }

    // default options for every snackbar
    const snackbarOptions = {
      autoHideDuration: 3000,
      ...otherOptions,
      ...options,
      ...customOptions,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      }
    }

    this.key = this._notistack.enqueueSnackbar(this.message, snackbarOptions)
  }

  close = () => {
    this._notistack.closeSnackbar(this.key)
  }
}

export default Snackbar
