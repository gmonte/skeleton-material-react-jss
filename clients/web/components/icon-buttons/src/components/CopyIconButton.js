import React, { useContext } from 'react'
import CopyIcon from '@conheca-meta-clients/react-icons/src/CopyIcon'
import { I18nContext } from '@meta-react/i18n'
import IconButton from '../index'

const CopyIconButton = (props) => {
  const { formatMessage } = useContext(I18nContext)

  return (
    <IconButton tooltip={ formatMessage({ id: 'copy' }) } { ...props }>
      <CopyIcon />
    </IconButton>
  )
}

export default CopyIconButton
