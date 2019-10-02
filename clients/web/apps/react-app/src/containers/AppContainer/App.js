import React from 'react'
import I18n from '@meta-react/i18n'
import { useSelector, useDispatch } from 'react-redux'
import { Types as TypesI18n } from '@conheca-meta-clients/store/src/ducks/i18n'
import { Types as TypesAuth } from '@conheca-meta-clients/store/src/ducks/auth'
import { selectCurrentLanguage } from '@conheca-meta-clients/store/src/selectors/i18n'
import { selectAuthenticated } from '@conheca-meta-clients/store/src/selectors/auth'
import './App.css'

function App() {
  // console.warn('container props', props)

  const dispatch = useDispatch()

  const currentLanguage = useSelector(selectCurrentLanguage)
  const authenticated = useSelector(selectAuthenticated)
  const loading = useSelector(state => state.auth.loading)

  const onLogin = () => dispatch({ type: TypesAuth.LOGIN })
  const onLogout = () => dispatch({ type: TypesAuth.LOGOUT })
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
        <br />
        <br />
        {
          !authenticated
            ? <button type="button" onClick={ onLogin }>login</button>
            : <button type="button" onClick={ onLogout }>logout</button>
        }
        {loading && <p>carregando...</p>}
      </header>
    </div>
  )
}

export default App
