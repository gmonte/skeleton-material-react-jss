import hexToRgba from 'hex-to-rgba'
import { Colors } from '@conheca-meta-clients/styles'

export default () => ({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  },
  contentScroll: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    minHeight: '100%',
    backgroundColor: hexToRgba(Colors.primary, 0.97)
  }
})
