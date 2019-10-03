import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  progress: {
    // margin: theme.spacing.unit * 2
    marginTop: 30
    // marginLeft: 15
  },
  labeledLoaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  label: {
    padding: '10px 0'
  }
}))
