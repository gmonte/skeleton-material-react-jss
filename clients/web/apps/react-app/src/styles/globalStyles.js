import { Colors, Fonts } from '@conheca-meta-clients/styles'
import fontThin from '../assets/fonts/ProductSans-Thin.woff'
import fontRegular from '../assets/fonts/ProductSans-Regular.woff'
import fontMedium from '../assets/fonts/ProductSans-Medium.woff'
import fontBold from '../assets/fonts/ProductSans-Bold.woff'

export default () => ({
  '@global': {
    '@font-face': [
      {
        fontFamily: 'Google Sans',
        src: `url("${ fontThin }") format("woff")`,
        fontWeight: Fonts.fontWeight.thin
      },
      {
        fontFamily: 'Google Sans',
        src: `url("${ fontRegular }") format("woff")`,
        fontWeight: Fonts.fontWeight.regular
      },
      {
        fontFamily: 'Google Sans',
        src: `url("${ fontMedium }") format("woff")`,
        fontWeight: Fonts.fontWeight.medium
      },
      {
        fontFamily: 'Google Sans',
        src: `url("${ fontBold }") format("woff")`,
        fontWeight: Fonts.fontWeight.bold
      }
    ],
    'html, body, #root': {
      fontFamily: Fonts.fontFamily,
      fontWeight: Fonts.regular,
      backgroundColor: Colors.grey[1],
      width: '100%',
      height: '100%',
      padding: 0,
      margin: 0,
      display: 'flex',
      flex: 1
      // userSelect: 'none' // disable mouse selector
    },
    a: {
      textDecoration: 'none'
    },
    '#dialog-portal': {
      zIndex: 1000
    },
    '#select-menu-portal': {
      zIndex: 1500
    }
  }
})
