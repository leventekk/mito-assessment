import React from 'react'
import ReactDOM from 'react-dom/client'
import Theme from '@module/Theme/Theme'
import Provider from '@context/Simulator/SimulatorProvider'
import Home from '@template/Home'

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <Provider>
        <Home />
      </Provider>
    </Theme>
  </React.StrictMode>
)
