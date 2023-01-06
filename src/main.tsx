import React from 'react'
import ReactDOM from 'react-dom/client'
import Theme from '@module/Theme/Theme'
import Home from '@template/Home'

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <Home />
    </Theme>
  </React.StrictMode>
)
