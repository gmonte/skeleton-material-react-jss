import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 30,
    marginBottom: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  loader: {
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7
  },
  cardContainer: {
    width: 450,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 5,
    [`@media (max-width: ${ 454 }px)`]: {
      width: '100% !important'
    }
  },
  brandContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  brand: {
    maxWidth: 150,
    width: '100%'
  },
  actionsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 10
  },
  button: {
    marginTop: 10
  },
  footerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginTop: 5,
    width: '100%'
  }
}))

export default useStyles
