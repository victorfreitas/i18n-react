import transtations from './translations'

export const languages = Object.keys(transtations)
export const STORAGE_KEY = 'current_language'
export const defaultLang = window.localStorage.getItem(STORAGE_KEY) || 'en'

export default lang => key => transtations[lang][key] || key
