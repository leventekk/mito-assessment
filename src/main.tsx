import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Theme from '@module/Theme/Theme'
import Provider from '@context/Simulator/SimulatorProvider'
import Home from '@template/Home'

createRoot(document.querySelector('#root') as HTMLElement).render(
  <StrictMode>
    <Theme>
      <Provider>
        <Home />
      </Provider>
    </Theme>
  </StrictMode>
)
