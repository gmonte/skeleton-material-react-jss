import flatpickr from 'flatpickr'
import English from 'flatpickr/dist/l10n/default'
import { Portuguese } from 'flatpickr/dist/l10n/pt'

export const localizeFlatpickr = (currentLanguage) => {
  let locale = English
  if (currentLanguage === 'pt-BR') {
    locale = Portuguese
  }
  flatpickr.localize(locale)
}

export const dateFormat = 'd/m/Y'
export const dateTimeFormat = 'd/m/Y H:i'
export const timeFormat = 'H:i'
export const momentFriendlyDateFormat = 'DD/MM/YYYY'
export const momentFriendlyDateTimeFormat = 'DD/MM/YYYY HH:mm'
export const momentFriendlyTimeFormat = 'HH:mm'
export const momentFriendlyMonthYearFormat = 'MM/YYYY'

export const momentBackDateFormat = 'DD/MM/YYYY'
export const momentBackDateTimeFormat = 'DD/MM/YYYY HH:mm:ss'
export const momentBackTimeFormat = 'HH:mm:ss'
export const momentBackMonthYearFormat = 'MM-YYYY'
export const momentBackSoftFormat = 'YYYY-MM-DD HH:mm:ss'

export const dateMask = [
  /\d/,
  /\d/, // DD
  '/', // /
  /\d/,
  /\d/, // MM
  '/', // /
  /\d/,
  /\d/,
  /\d/,
  /\d/ // YYYY
]
export const dateTimeMask = [
  /\d/,
  /\d/, // DD
  '/', // /
  /\d/,
  /\d/, // MM
  '/', // /
  /\d/,
  /\d/,
  /\d/,
  /\d/, // YYYY
  ' ',
  /\d/,
  /\d/, // HH
  ':',
  /\d/,
  /\d/ // mm
]
export const timeMask = [
  /\d/,
  /\d/, // HH
  ':',
  /\d/,
  /\d/ // mm
]

export const monthYearMask = [
  /[0-10]/,
  /\d/, // MM
  '/',
  /\d/,
  /\d/,
  /\d/,
  /\d/ // YYYY
]
