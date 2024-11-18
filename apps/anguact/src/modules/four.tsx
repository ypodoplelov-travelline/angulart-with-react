import { react2angular } from '@repo/render-bridge'
import { useState } from 'react'

function LazyLoader() {
  const [isShowLazy, setShowLazy] = useState(false)
  return (
    <div>
      loader
      <button
        onClick={() => {
          setShowLazy(!isShowLazy)
        }}
      />
      {!!isShowLazy && <div>loading...</div>}
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
