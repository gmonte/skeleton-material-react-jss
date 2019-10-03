import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Popover from '@material-ui/core/Popover'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing.unit,
  },
})

class PopoverOver extends React.Component {
  constructor() {
    super()

    this.state = {
      anchorEl: null,
    }

    this.withFocus = false
  }

  componentDidMount() {
    const {
      anchorEl: {
        current
      }
    } = this.props

    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
    const mouseenter = new MouseEvent('mouseenter', {
      view: window,
      bubbles: true,
      cancelable: true
    })
    const mouseleave = new MouseEvent('mouseleave', {
      view: window,
      bubbles: true,
      cancelable: true
    })

    current.dispatchEvent(mouseenter)
    current.dispatchEvent(mouseleave)

    current.addEventListener('mouseenter', this.handlePopoverOpen)
    current.addEventListener('mouseleave', this.handlePopoverClose)
  }

  componentWillUnmount() {
    this.withFocus = false
  }

  handlePopoverOpen = () => {
    const {
      withDelay,
      anchorEl: {
        current
      }
    } = this.props
    this.withFocus = true
    setTimeout(() => {
      if (this.withFocus) {
        this.setState({ anchorEl: current })
      }
    }, withDelay ? 750 : 1)
  }

  handlePopoverClose = () => {
    this.withFocus = false
    this.setState({ anchorEl: null })
  }

  render() {
    const {
      classes,
      popoverId,
      content
    } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <Popover
        id={ popoverId }
        className={ classes.popover }
        classes={ {
          paper: classes.paper,
        } }
        open={ open }
        anchorEl={ anchorEl }
        anchorOrigin={ {
          vertical: 'bottom',
          horizontal: 'left'
        } }
        transformOrigin={ {
          vertical: 'top',
          horizontal: 'left',
        } }
        onClose={ this.handlePopoverClose }
        disableRestoreFocus
      >
        <Typography variant="body2">
          { content }
        </Typography>
      </Popover>
    )
  }
}

PopoverOver.propTypes = {
  classes: PropTypes.shape().isRequired,
  anchorEl: PropTypes.shape().isRequired,
  popoverId: PropTypes.string.isRequired,
  content: PropTypes.string,
  withDelay: PropTypes.bool
}

PopoverOver.defaultProps = {
  content: null,
  withDelay: true
}

export default withStyles(styles)(PopoverOver)
