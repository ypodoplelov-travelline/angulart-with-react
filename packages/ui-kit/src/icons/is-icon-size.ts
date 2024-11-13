import { iconSizeMap } from './icon-size-map'

import type { AssetSizeType } from './types'

const iconSizes = Object.keys(iconSizeMap)

export function isIconSize(
  size: string,
): size is Exclude<AssetSizeType, number> {
  return iconSizes.includes(size)
}
