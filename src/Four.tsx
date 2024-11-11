import { react2angular } from 'react2angular'

export const Four = ({ four }: {four: number}) =>
  <div>
    four: {four}
  </div>

export const FourAngular = react2angular(Four, ['four'])
