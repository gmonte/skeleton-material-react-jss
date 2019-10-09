import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Files from 'react-files'
import isEmpty from 'lodash/isEmpty'
import { I18nContext } from '@meta-react/i18n'
import prettysize from 'prettysize'
import { useStyles } from './styles'

const ChooseFileInput = (props) => {
  const {
    onChange,
    image,
    pdf,
    multiple,
    disabled,
    maxFileSize,
    ...otherProps
  } = props

  const { formatMessage } = useContext(I18nContext)

  const classes = useStyles()

  let { children } = props

  const onFilesError = (error) => {
    window.snackbar.warn(
      formatMessage(
        { id: 'choose-file-error' },
        {
          fileType: extensions.join(` ${ formatMessage({ id: 'or' }) } `),
          size: prettysize(maxFileSize)
        }
      ),
      {
        autoHideDuration: 15000
      }
    )
    console.error(`choose file error code ${ error.code }: ${ error.message }`)
  }

  const onFilesChange = (file) => {
    if (!isEmpty(file)) {
      onChange(file)
    }
  }

  const accepts = []
  let extensions = []
  if (image) {
    accepts.push('image/*')
    extensions = ['.jpg', '.png', '.gif']
  }
  if (pdf) {
    accepts.push('.pdf')
    extensions = ['.pdf']
  }

  if (!children) {
    children = formatMessage({ id: 'choose-file' })
  }

  return (
    <Files
      className={ classes.container }
      onChange={ onFilesChange }
      onError={ onFilesError }
      accepts={ accepts }
      multiple={ multiple }
      clickable={ !disabled }
      maxFileSize={ maxFileSize }
      { ...otherProps }
    >
      {children}
    </Files>
  )
}

ChooseFileInput.propTypes = {
  intl: PropTypes.shape().isRequired,
  image: PropTypes.bool,
  pdf: PropTypes.bool,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  minFileSize: PropTypes.number,
  maxFileSize: PropTypes.number,
  children: PropTypes.any
}

ChooseFileInput.defaultProps = {
  image: false,
  pdf: false,
  multiple: false,
  disabled: false,
  onChange: () => {},
  minFileSize: 0,
  maxFileSize: 2097152,
  children: null
}

export default ChooseFileInput
