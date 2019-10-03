import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'
import { inject, observer, PropTypes as MobxPropTypes } from 'mobx-react'
import { withStores } from './utils'
import dialogPortalStore from './stores/dialogPortalStore'
import DialogPortal from './DialogPortal'

export const DialogPortalContext = createContext()

@inject('dialogPortalStore')
@observer
class DialogPortalProvider extends Component {
  render() {
    const {
      dialogPortalStore: { getDialogs, openDialog, closeDialog },
      children
    } = this.props

    return (
      <DialogPortalContext.Provider value={ { openDialog, closeDialog } }>
        <DialogPortal getDialogs={ getDialogs } />
        {children}
      </DialogPortalContext.Provider>
    )
  }
}

DialogPortalProvider.propTypes = {
  // eslint-disable-next-line react/require-default-props
  dialogPortalStore: MobxPropTypes.objectOrObservableObject,
  children: PropTypes.any.isRequired
}

export default withStores({ dialogPortalStore })(DialogPortalProvider)
