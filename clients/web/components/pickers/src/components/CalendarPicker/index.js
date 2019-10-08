import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Flatpickr from 'react-flatpickr'
import { localizeFlatpickr } from '../../utils'

import styles from './styles'

class CalendarPicker extends Component {
  constructor(props) {
    super(props)
    localizeFlatpickr(props.language)
  }

  render() {
    const { language, ...props } = this.props

    const options = {
      ...props.options,
      disableMobile: true
    }

    return <Flatpickr { ...props } options={ options } />
  }
}

CalendarPicker.propTypes = {
  language: PropTypes.string.isRequired
}

export default withStyles(styles)(CalendarPicker)
