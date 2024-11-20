import { react2angular } from '@repo/render-bridge'
import { useState } from 'react'

import { SubDirective } from '@bf-client/place-first/sub/sub.directive'

import { Three } from './three'

export function Two({ two }: { two: number }) {
  const [val, setValue] = useState(1)
  return (
    <div>
      two react: {two}
      <div>
        <SubDirective name="pass test value" />
        <input
          value={val}
          onChange={(e) => {
            setValue(e.target.value as unknown as number)
          }}
        />
        {val}
      </div>
      <Three three={two * Number(val)} />
    </div>
  )
}

export const TwoAngular = react2angular(Two, 'twoAngular', ['two'])
