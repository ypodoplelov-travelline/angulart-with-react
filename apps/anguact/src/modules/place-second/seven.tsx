import { react2angular } from '@repo/render-bridge'

export function Seven({ two }: { two: number }) {
  return (
    <div>
      seven react: {two}
      <br />
      this is END
    </div>
  )
}

export const SevenAngular = react2angular(Seven, 'sevenAngular', ['two'])
