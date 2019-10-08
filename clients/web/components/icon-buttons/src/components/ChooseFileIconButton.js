import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import FinderIcon from '@conheca-meta-clients/react-icons/src/FinderIcon'
import { I18nContext } from '@meta-react/i18n'
import IconButton from '../index'

const ChooseFileIconButton = ({ extension, ...props }) => {
  const { formatMessage } = useContext(I18nContext)
  return (
    <IconButton tooltip={ formatMessage({ id: 'choose-file' }, { extension }) } { ...props }>
      <FinderIcon />
    </IconButton>
  )
}

ChooseFileIconButton.propTypes = {
  extension: PropTypes.string
}

ChooseFileIconButton.defaultProps = {
  extension: ''
}

export default ChooseFileIconButton
