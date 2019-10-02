/* eslint-disable react/prop-types */
import isFunction from 'lodash/isFunction'
import React, { createElement } from 'react'
import { Provider } from 'mobx-react'

const withStores = (stores = {}) => WrappedComponent => props => (
  <Provider { ...stores }>
    <WrappedComponent { ...props } />
  </Provider>
)

/*
 * posibilita criar modal instantaneamente quando algo é clicado
 * ou passa reto o click caso nao tenha um modalComponent setado
 * */
const createDynamicModal = (configs) => {
  const { modalComponent, modalProps = {}, onClick = () => {} } = configs

  if (isFunction(modalComponent)) {
    window.openDialog({
      component: ({ open, dialogId }) => createElement(modalComponent, {
        ...modalProps,
        open,
        dialogId
      })
    })
  }
  onClick()
}

const closeDynamicModal = (props) => {
  const { dialogId, onCancel } = props

  window.closeDialog(dialogId)
  if (isFunction(onCancel)) {
    onCancel()
  }
}

export { createDynamicModal, closeDynamicModal, withStores }
