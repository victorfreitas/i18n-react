import React, { useContext } from 'react'

import { I18nContext } from '../../i18n/Context'
import { CHANGE_LANGUAGE } from '../../i18n/reducer'
import { languages } from '../../i18n'

const LanguageSelector = () => {
  const { lang, dispatch } = useContext(I18nContext)

  const handlerLanguage = ({ currentTarget: { value } }) => {
    dispatch({
      type: CHANGE_LANGUAGE,
      payload: value,
    })
  }

  const renderOptions = () => {
    return languages.map(code => (
      <option key={code} value={code}>
        {code}
      </option>
    ))
  }

  return (
    <select defaultValue={lang} onChange={handlerLanguage}>
      {renderOptions()}
    </select>
  )
}

export default LanguageSelector
