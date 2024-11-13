import { react2angular } from 'react2angular'

export function Four({ four }: { four: number }) {
  return <div>four: {four}</div>
}

export const FourAngular = react2angular(Four, ['four'])
