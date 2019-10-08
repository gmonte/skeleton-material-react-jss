import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
  container: {
    // cursor: 'pointer' // todo não funcionou
  },
  dragging: {
    '& fieldset': {
      borderStyle: 'dashed !important',
      borderWidth: '4px !important'
    }
  }
}))
