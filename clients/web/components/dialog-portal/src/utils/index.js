/* eslint-disable react/prop-types */
import React from 'react'
import { Provider } from 'mobx-react'

export const withStores = (stores = {}) => WrappedComponent => props => (
  <Provider { ...stores }>
    <WrappedComponent { ...props } />
  </Provider>
)
