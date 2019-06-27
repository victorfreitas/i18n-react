import React, { useContext } from 'react'

import './style.css'
import logo from '../../logo.svg'
import { I18nContext } from '../../i18n/Context'
import LanguageSelector from '../LanguageSelector'

function App() {
  const { t } = useContext(I18nContext)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LanguageSelector />
        <p>
          {t('App.description')}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('App.linkTitle')}
        </a>
      </header>
    </div>
  )
}

export default App
