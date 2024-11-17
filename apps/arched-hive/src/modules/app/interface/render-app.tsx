import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '../ui/app'

export function renderApp() {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
