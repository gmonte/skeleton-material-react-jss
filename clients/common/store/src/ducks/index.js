import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import i18n from './i18n'
import auth from './auth'

const i18nPersistConfig = {
  key: 'i18n',
  storage
}

const authPersistConfig = {
  key: 'auth',
  storage
}

export default combineReducers({
  i18n: persistReducer(i18nPersistConfig, i18n),
  auth: persistReducer(authPersistConfig, auth)
})
