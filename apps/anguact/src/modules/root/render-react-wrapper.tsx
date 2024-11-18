import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { MainPage } from '@bf-client/main-page/main.page'

export function renderReactWrapper() {
  const node = document.getElementById('root')
  if (!node) {
    console.error('Root mode not found!')
    return
  }

  createRoot(node).render(
    <StrictMode>
      <MainPage />
    </StrictMode>,
  )
}
