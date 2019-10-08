import hexToRgba from 'hex-to-rgba'
import { Colors, Fonts } from '@conheca-meta-clients/styles'

export default {
  palette: {
    primary: {
      main: Colors.primary
    },
    secondary: {
      main: Colors.secondary,
      contrastText: Colors.primary
    }
  },
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: Fonts.fontFamily,
    fontWeight: Fonts.fontWeight.regular,
    color: Colors.text
  },
  overrides: {
    MuiButton: {

    },
    MuiTooltip: {
      popper: {
        zIndex: 5000
      },
      tooltip: {
        margin: '3px !important',
        backgroundColor: Colors.secondary,
        color: Colors.white,
        border: `1px solid ${ Colors.primary }`,
        fontSize: 12,
        letterSpacing: 1
      }
    },
    MuiCard: {
      root: {
        boxShadow: `0 1px 4px 0 ${ hexToRgba(Colors.black, 0.14) }`
      }
    },
    MuiFab: {
      extended: {
        padding: '0 25px'
      }
    }
  }
}
