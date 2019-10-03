import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative'
  },
  iconButtonMarginVertical: {
    marginTop: 2.5,
    marginBottom: 2.5
  },
  iconButtonMarginHorizontal: {
    marginLeft: 2.5,
    marginRight: 2.5
  },
  btnShadow: {
    boxShadow:
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.1), 0px 1px 10px 0px rgba(0, 0, 0, 0.06)'
  },
  withOpacity: {
    opacity: 0.5,
    '&:hover': {
      opacity: 1,
      transition: 'opacity 0.1s'
    }
  },
  spanIconButton: {
    display: 'flex'
  },
  mini: {
    padding: 4
  },
  btnTransparentWhite: {
    '&:not(disabled)': {
      backgroundColor: 'transparent'
    }
  },
  none: {
    padding: 0
  }
}))

export default useStyles
