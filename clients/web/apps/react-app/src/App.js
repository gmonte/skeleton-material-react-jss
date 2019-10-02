import React from 'react'
import I18n, { I18nProvider } from '@meta-react/i18n'
import dictionaries from '@conheca-meta-clients/i18n'
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <I18nProvider language="pt-BR" dictionaries={ dictionaries }>
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <p>
            <I18n>invalid CPF</I18n>
          </p>
          <p>
            <I18n>hello world</I18n>
          </p>
        </header>
      </div>
    </I18nProvider>
  )
}

export default App
