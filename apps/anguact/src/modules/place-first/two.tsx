import { react2angular } from '@repo/render-bridge'
import { useState } from 'react'

import { Three } from './three'

export function Two({ two }: { two: number }) {
  const [val, setValue] = useState(1)
  return (
    <div>
      two react: {two}
      <div>
        <input
          value={val}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
        {val}
      </div>
      <Three three={two * Number(val)} />
    </div>
  )
}

export const TwoAngular = react2angular(Two, 'twoAngular', ['two'])
