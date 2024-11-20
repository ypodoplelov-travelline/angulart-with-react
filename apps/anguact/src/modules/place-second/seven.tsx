import { react2angular } from '@repo/render-bridge'

import { TlIcon } from './icon/icon.directive'

export function Seven({ two }: { two: number }) {
  return (
    <div>
      seven react: {two}
      <br />
      <TlIcon name="just_name" displayName="ordinary_display_name" />
      this is END
    </div>
  )
}

export const SevenAngular = react2angular(Seven, 'sevenAngular', ['two'])
