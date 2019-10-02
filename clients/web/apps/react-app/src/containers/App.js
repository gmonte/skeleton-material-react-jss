import React from 'react'
import I18n from '@meta-react/i18n'
import { selectCurrentLanguage } from '@conheca-meta-clients/store/src/selectors/i18n'
import { Types as TypesI18n } from '@conheca-meta-clients/store/src/ducks/i18n'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'

function App() {
  const currentLanguage = useSelector(selectCurrentLanguage)
  const dispatch = useDispatch()

  const onChangeLanguage = language => dispatch({ type: TypesI18n.SET_CURRENT_LANGUAGE, language })

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <I18n>hello world</I18n>
        </p>
        <p>{currentLanguage}</p>
        <hr />
        <button type="button" onClick={ () => onChangeLanguage('pt-BR') }>
          pt-BR
        </button>
        <button type="button" onClick={ () => onChangeLanguage('en') }>
          en
        </button>
      </header>
    </div>
  )
}

export default App
