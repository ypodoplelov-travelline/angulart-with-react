import { react2angular } from 'react2angular'
import { Three } from './Three'

export const Two = ({ two }: {two: number}) =>
  <div>
    two: {two}
    <Three three={two * 2} />
  </div>

export const TwoAngular = react2angular(Two, ['two'])
