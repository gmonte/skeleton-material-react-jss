import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import isString from 'lodash/isString'
import InputAdornment from '@material-ui/core/InputAdornment'
import ChooseFileIconButton from '@conheca-meta-clients/react-icon-buttons/src/components/ChooseFileIconButton'
import classnames from 'classnames'
import ChooseFileInput from '../ChooseFileInput'
import TextInput from '../TextInput'
import { useStyles } from './styles'

const SingleFileInput = (props) => {
  const {
    chooseFileInputProps, disabled, onChange, value, ...otherProps
  } = props

  const classes = useStyles()

  const dropRef = useRef(null)

  const [fileName, setFileName] = useState('')
  const [dragging, setDragging] = useState(false)

  useEffect(() => {
    const drop = dropRef.current

    const handleDragIn = () => {
      if (!dragging) {
        setDragging(true)
      }
    }

    const handleDragOut = () => {
      setDragging(false)
    }

    drop.addEventListener('dragenter', handleDragIn)
    drop.addEventListener('dragleave', handleDragOut)
    drop.addEventListener('drop', handleDragOut)

    return () => {
      drop.removeEventListener('dragenter', handleDragIn)
      drop.removeEventListener('dragleave', handleDragOut)
      drop.removeEventListener('drop', handleDragOut)
    }
  }, [])

  useEffect(() => {
    if (!isEmpty(value) && !isString(value)) {
      setFileName(value.name)
    } else if (isString(value)) {
      setFileName(value)
    }
  }, [value])

  const handleChange = ([file] = []) => {
    setFileName(file.name)
    onChange(file)
  }

  return (
    <div ref={ dropRef } className={ classnames(classes.container, { [classes.dragging]: dragging }) }>
      <ChooseFileInput { ...chooseFileInputProps } onChange={ handleChange } multiple={ false }>
        <TextInput
          { ...otherProps }
          onBlur={ () => {} }
          onFocus={ () => {} }
          value={ fileName }
          readOnly
          fullWidth
          InputProps={ {
            endAdornment: (
              <InputAdornment position="end">
                <ChooseFileIconButton />
              </InputAdornment>
            )
          } }
        />
      </ChooseFileInput>
    </div>
  )
}

SingleFileInput.propTypes = {
  chooseFileInputProps: PropTypes.shape().isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      name: PropTypes.string
    })
  ]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}

SingleFileInput.defaultProps = {
  onChange: () => {},
  value: '',
  disabled: false
}

export default SingleFileInput
