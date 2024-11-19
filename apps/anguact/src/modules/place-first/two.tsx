import { react2angular } from '@repo/render-bridge'

import { Three } from './three'

export function Two({ two }: { two: number }) {
  return (
    <div>
      two react: {two}
      <Three three={two * 2} />
    </div>
  )
}

export const TwoAngular = react2angular(Two, 'twoAngular', ['two'])
