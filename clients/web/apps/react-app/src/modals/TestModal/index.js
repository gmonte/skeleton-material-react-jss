import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { I18nContext } from '@meta-react/i18n'
import { Modal } from '@conheca-meta-clients/react-dialog-portal'

const TestModal = (props) => {
  const { formatMessage } = useContext(I18nContext)

  return (
    <Modal maxWidth="xs" fullWidth title={ formatMessage({ id: 'hello world' }) } { ...props }>
      <h2>Test!</h2>
    </Modal>
  )
}

TestModal.propTypes = {
  dialogId: PropTypes.string.isRequired
}

export default TestModal
