export const selectCurrentLanguage = state => state.i18n.currentLanguage
export const selectCurrentLanguageHeader = state => ({ locale: selectCurrentLanguage(state) })
