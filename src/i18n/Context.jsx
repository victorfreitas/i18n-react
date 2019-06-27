import React, { createContext, useReducer } from 'react'

import i18n, { defaultLang } from '.'
import reducer from './reducer'

const initialState = {
	lang: defaultLang,
	t: i18n(defaultLang),
}

export const I18nContext = createContext(initialState)

export const I18nProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<I18nContext.Provider value={{ ...state, dispatch }}>
			{children}
		</I18nContext.Provider>
	)
}
