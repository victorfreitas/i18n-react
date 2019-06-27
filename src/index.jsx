import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import { I18nProvider } from './i18n/Context'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <I18nProvider>
    <App />
  </I18nProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
