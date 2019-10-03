import React, { useContext } from 'react'
import CloseIcon from '@conheca-meta-clients/react-icons/src/CloseIcon'
import { I18nContext } from '@meta-react/i18n'
import IconButton from '../index'

const CloseIconButton = (props) => {
  const { formatMessage } = useContext(I18nContext)

  return (
    <IconButton tooltip={ formatMessage({ id: 'close' }) } { ...props }>
      <CloseIcon />
    </IconButton>
  )
}

export default CloseIconButton
