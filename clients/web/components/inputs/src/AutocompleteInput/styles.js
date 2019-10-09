import { emphasize } from '@material-ui/core/styles/colorManipulator'

export default theme => ({
  root: {
    flexGrow: 1
  },
  input: {
    display: 'flex',
    padding: '10px 13px',
    height: 'auto'
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden'
  },
  chip: {
    margin: theme.spacing(0.5, 0.25)
  },
  chipFocused: {
    backgroundColor: emphasize(theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700], 0.08)
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2)
  },
  singleValue: {
    fontSize: 16
  },
  paper: {
    position: 'absolute',
    zIndex: 10,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    left: 0,
    right: 0
  },
  divider: {
    height: theme.spacing(2)
  },
  fullWidth: {
    width: '97%'
  }
})
