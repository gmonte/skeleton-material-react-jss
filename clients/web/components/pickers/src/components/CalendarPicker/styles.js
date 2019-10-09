import 'flatpickr/dist/themes/light.css'
import Fonts from '@conheca-meta-clients/styles/src/Fonts'

export default () => ({
  '@global': {
    '.flatpickr-calendar': {
      fontFamily: Fonts.fontFamily
    },
    '.flatpickr-wrapper': {
      display: 'flex',
      '& div': {
        flex: 1
      }
    }
  }
})
