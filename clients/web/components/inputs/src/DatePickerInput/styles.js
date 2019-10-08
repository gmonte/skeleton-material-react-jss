import { makeStyles } from '@material-ui/core/styles'
import Fonts from '@conheca-meta-clients/styles/src/Fonts'
import Colors from '@conheca-meta-clients/styles/src/Colors'

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120,
    display: 'flex !important'
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  helperText: {
    marginTop: 4
  },
  margin: {
    marginTop: 8,
    marginBottom: 4
  },
  inputEmpty: {
    opacity: 0
  },
  input: {
    width: '100%',
    border: 'none',
    fontSize: Fonts.fontSize.M,
    padding: [5, 0, 8],
    '&:focus': {
      outline: 0
    }
  },
  inputDisabled: {
    color: Colors.inputDisabled
  }
}))

export default useStyles
