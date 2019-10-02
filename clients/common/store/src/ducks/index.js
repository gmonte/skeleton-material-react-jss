import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import i18n from './i18n'

const i18nPersistConfig = {
  key: 'i18n',
  storage
}
export default combineReducers({
  i18n: persistReducer(i18nPersistConfig, i18n)
})
