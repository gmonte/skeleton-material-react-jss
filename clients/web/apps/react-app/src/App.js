import React from 'react'
import { withJssThemeProvider } from '@conheca-meta-clients/react-jss'
import { I18nProvider } from '@meta-react/i18n'
import dictionaries from '@conheca-meta-clients/i18n'
import { StoreProvider } from '@conheca-meta-clients/store'
import { selectCurrentLanguage } from '@conheca-meta-clients/store/src/selectors/i18n'
import { useSelector } from 'react-redux'
import ScreenRouter from './screens/ScreenRouter'
import defaultTheme from './themes/default'

const AppStored = () => {
  const currentLanguage = useSelector(selectCurrentLanguage)
  return (
    <I18nProvider language={ currentLanguage } dictionaries={ dictionaries }>
      <ScreenRouter />
    </I18nProvider>
  )
}

function App() {
  return (
    <StoreProvider>
      <AppStored />
    </StoreProvider>
  )
}

export default withJssThemeProvider(defaultTheme)(App)
