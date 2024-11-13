import * as svgAssets from './assets-svg'
import { getIconSizeStyle } from './get-icon-size-style'

import type { AssetSizeType } from './types'

type SvgNames = keyof typeof svgAssets
export type IconName = SvgNames

type Props = {
  name: SvgNames
  size?: AssetSizeType
}

export function Icon({ name, size }: Props) {
  const IconComponent = svgAssets[name] || undefined
  if (!IconComponent) {
    console.error(`Icon name "${name}" not defined!`)
  }
  const sizeStyle = getIconSizeStyle(size)

  return (
    <span
      className="flex items-center justify-center"
      style={sizeStyle}
      data-icon-name={name}
    >
      {!!IconComponent && <IconComponent />}
    </span>
  )
}
