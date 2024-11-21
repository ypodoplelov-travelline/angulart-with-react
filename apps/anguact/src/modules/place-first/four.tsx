import { react2angular } from '@repo/render-bridge'
import { lazy, Suspense, useState } from 'react'

import { SuspenseComponentLoader } from '@bf-client/system/ui/suspense-component-loader'

const LazyFive = lazy(() => import('@bf-client/place-second/lazy-five'))

function LazyLoader({ four }: { four: number }) {
  const [isShowLazy, setShowLazy] = useState(false)
  return (
    <div>
      loader
      <button
        onClick={() => {
          setShowLazy(!isShowLazy)
        }}
      >
        load more components
      </button>
      {!!isShowLazy && (
        <SuspenseComponentLoader>
          <LazyFive two={four} />
        </SuspenseComponentLoader>
      )}
    </div>
  )
}

export function Four({ four }: { four: number }) {
  return (
    <div>
      four react: {four}
      <LazyLoader four={four} />
    </div>
  )
}

export const FourAngular = react2angular(Four, 'fourAngular', ['four'])
