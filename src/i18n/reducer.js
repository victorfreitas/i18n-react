import i18n, { STORAGE_KEY } from '.'

export const CHANGE_LANGUAGE = 'change/language'

export default (state, action) => {
	switch (action.type) {
		case CHANGE_LANGUAGE:
      window.localStorage.setItem(STORAGE_KEY, action.payload)

			return {
				lang: action.payload,
				t: i18n(action.payload),
			}

		default:
			return state
	}
}
