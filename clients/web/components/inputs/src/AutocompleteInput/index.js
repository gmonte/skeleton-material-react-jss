import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import find from 'lodash/find'
import filter from 'lodash/filter'
import indexOf from 'lodash/indexOf'
import toString from 'lodash/toString'
import omitBy from 'lodash/omitBy'
import get from 'lodash/get'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'
import isArray from 'lodash/isArray'
import isNumber from 'lodash/isNumber'
import isBoolean from 'lodash/isBoolean'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import NoSsr from '@material-ui/core/NoSsr'
import ReactSelect from 'react-select'
import CreatableSelect from 'react-select/creatable'
import createFilterOptions from 'react-select-fast-filter-options'
import uuid from 'uuid/v1'
import { I18nContext } from '@meta-react/i18n'

import Control from './Control'
import Menu from './Menu'
import MultiValue from './MultiValue'
import NoOptionsMessage from './NoOptionsMessage'
import Option from './Option'
import Placeholder from './Placeholder'
import SingleValue from './SingleValue'
import ValueContainer from './ValueContainer'

import styles from './styles'

const useStyles = makeStyles(styles)

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
}

function AutocompleteInput(props) {
  const {
    isMulti,
    isLoading,
    onChange,
    noOptionsMessage,
    isClearable,
    isActive,
    creatable,
    value,
    disabled,
    SelectComponent,
    defaultOptions,
    loadOptions,
    noTransformValue,
    ...inputProps
  } = props

  const { formatMessage } = useContext(I18nContext)

  let { options } = props
  options = map(options, option => ({ ...option, value: toString(option.value) }))

  const classes = useStyles()
  const theme = useTheme()

  function handleChange(inputValue) {
    if (isArray(inputValue)) {
      // multiselect
      onChange({ target: { value: map(inputValue, item => item.value) } })
    } else {
      onChange({ target: { value: get(inputValue, 'value', '') } })
    }
  }

  let selectedValue = value
  if (!noTransformValue && !(isEmpty(value) || isNumber(value) || isBoolean(value))) {
    if (creatable) {
      if (isArray(value)) {
        selectedValue = map(
          value,
          item => find(options, option => option.value === toString(item)) || { value: item, label: item }
        )
      } else {
        selectedValue = find(options, option => option.value === toString(value)) || { value, label: value }
      }
    } else if (isArray(value)) {
      selectedValue = filter(options, option => indexOf(value, option.value) > -1)
    } else {
      selectedValue = find(options, option => option.value === toString(value))
    }
  }

  const selectStyles = {
    indicatorsContainer: base => ({
      ...base,
      cursor: 'pointer'
    }),
    container: base => ({
      ...base,
      display: 'flex'
    }),
    input: base => ({
      ...base,
      color: theme.palette.text.primary
    })
  }

  const [id] = useState(uuid())

  const filterOptions = createFilterOptions({
    options
  })

  const Select = creatable ? CreatableSelect : SelectComponent

  return (
    <div className={ classes.root }>
      <NoSsr>
        <Select
          placeholder=""
          menuPortalTarget={ document.getElementById('select-menu-portal') }
          classes={ classes }
          styles={ selectStyles }
          inputId={ id }
          options={ options }
          filterOptions={ filterOptions }
          components={ components }
          value={ selectedValue }
          onChange={ handleChange }
          isLoading={ isLoading }
          isMulti={ isMulti }
          isClearable={ isClearable }
          isDisabled={ disabled }
          disabled={ disabled }
          defaultOptions={ defaultOptions }
          loadOptions={ loadOptions }
          noOptionsMessage={ inputValue => noOptionsMessage(inputValue) || formatMessage({ id: 'no-options-message' }) }
          loadingMessage={ () => formatMessage({ id: 'loading' }) }
          TextFieldProps={ {
            InputLabelProps: {
              htmlFor: id,
              shrink: !isEmpty(selectedValue) || isActive
            },
            ...omitBy(inputProps, (_, key) => key === 'options')
          } }
          formatCreateLabel={ inputValue => formatMessage({ id: 'add-option' }, { inputValue }) }
        />
      </NoSsr>
    </div>
  )
}

AutocompleteInput.propTypes = {
  SelectComponent: PropTypes.func,
  isMulti: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.shape(),
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape()]))
  ]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  helperText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onChange: PropTypes.func,
  noOptionsMessage: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  isActive: PropTypes.bool,
  isClearable: PropTypes.bool,
  label: PropTypes.string,
  error: PropTypes.bool,
  required: PropTypes.bool,
  creatable: PropTypes.bool,
  loadOptions: PropTypes.func,
  defaultOptions: PropTypes.any,
  noTransformValue: PropTypes.bool
}

AutocompleteInput.defaultProps = {
  isMulti: false,
  helperText: '',
  value: '',
  onChange: () => {},
  disabled: false,
  isActive: false,
  isLoading: false,
  isClearable: false,
  label: '',
  options: [],
  noOptionsMessage: () => null,
  error: false,
  required: false,
  creatable: false,
  SelectComponent: ReactSelect,
  loadOptions: undefined,
  defaultOptions: undefined,
  noTransformValue: false
}

export default AutocompleteInput

export { AutocompleteInput as AutocompleteInputProps }
