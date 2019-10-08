import React, { useContext } from 'react'
import EyeOpenedIcon from '@conheca-meta-clients/react-icons/src/EyeOpenedIcon'
import { I18nContext } from '@meta-react/i18n'
import IconButton from '../index'

const EyeOpenedIconButton = (props) => {
  const { formatMessage } = useContext(I18nContext)
  return (
    <IconButton tooltip={ formatMessage({ id: 'show password' }) } { ...props }>
      <EyeOpenedIcon />
    </IconButton>
  )
}

export default EyeOpenedIconButton
