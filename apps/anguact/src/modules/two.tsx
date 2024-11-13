import { react2angular } from 'react2angular'

import { Three } from './three'

export function Two({ two }: { two: number }) {
  return (
    <div>
      two: {two}
      <Three three={two * 2} />
    </div>
  )
}

export const TwoAngular = react2angular(Two, ['two'])
