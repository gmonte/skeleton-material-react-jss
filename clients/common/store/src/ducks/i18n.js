import indexOf from 'lodash/indexOf'
import first from 'lodash/first'
import { createActions, createReducer } from 'reduxsauce'

/*
 * Creating action types & creators
 * */
export const { Types, Creators } = createActions({
  setCurrentLanguage: ['language']
})

/*
 * Creating Initial state and Redux handlers
 * */
const getDefaultLanguage = () => {
  const supportedLanguages = ['en', 'pt-BR']
  const local = navigator.language || navigator.userLanguage

  if (indexOf(supportedLanguages, local) > -1) {
    return local
  }
  return first(supportedLanguages)
}

const INITIAL_STATE = {
  currentLanguage: getDefaultLanguage()
}

const setCurrentLanguage = (state = INITIAL_STATE, action) => ({
  ...state,
  currentLanguage: action.language
})

/*
 * Creating reducer
 * */
export default createReducer(INITIAL_STATE, {
  [Types.SET_CURRENT_LANGUAGE]: setCurrentLanguage
})
