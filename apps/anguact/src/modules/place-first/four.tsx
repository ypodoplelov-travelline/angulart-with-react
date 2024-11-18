import { react2angular } from '@repo/render-bridge'
import { lazy, Suspense, useState } from 'react'

const LazyFive = lazy(() => import('@bf-client/place-second/lazy-five'))

function LazyLoader() {
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
        <Suspense fallback={<>loading...</>}>
          <LazyFive two={2} />
        </Suspense>
      )}
    </div>
  )
}

export function Four({ four }: { four: number }) {
  return (
    <div>
      four: {four}
      <LazyLoader />
    </div>
  )
}

export const FourAngular = react2angular(Four, ['four'])
