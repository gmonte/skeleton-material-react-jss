import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%'
  },
  forgotPassword: {
    marginTop: 7.5,
    '& > span:first-child': {
      textTransform: 'none'
    }
  },
  checkboxesContainer: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
}))

export default useStyles
