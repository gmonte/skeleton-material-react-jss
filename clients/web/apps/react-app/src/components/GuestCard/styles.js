import hexToRgb from 'hex-to-rgba'
import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '@conheca-meta-clients/styles'

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
    padding: 30,
    paddingTop: 40,
    paddingBottom: 15,
    backgroundColor: hexToRgb(Colors.white, 0.9),
    [`@media (max-width: ${ 454 }px)`]: {
      width: '100% !important'
    }
  },
  brandContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  brand: {
    maxWidth: 200,
    width: '100%'
  }
}))

export default useStyles
