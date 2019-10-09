import React, { useContext } from 'react'
import EyeClosedIcon from '@conheca-meta-clients/react-icons/src/EyeClosedIcon'
import { I18nContext } from '@meta-react/i18n'
import IconButton from '../index'

const EyeClosedIconButton = (props) => {
  const { formatMessage } = useContext(I18nContext)
  return (
    <IconButton tooltip={ formatMessage({ id: 'hide password' }) } { ...props }>
      <EyeClosedIcon />
    </IconButton>
  )
}

export default EyeClosedIconButton
