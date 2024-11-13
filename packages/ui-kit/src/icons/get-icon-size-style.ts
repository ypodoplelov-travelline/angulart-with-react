import { iconSizeMap } from './icon-size-map'

import type { AssetSizeType } from './types'

export function getIconSizeStyle(size: AssetSizeType = 'default') {
  const sizeStyle = typeof size === 'number' ? `${size}px` : iconSizeMap[size]
  return {
    width: sizeStyle,
    height: sizeStyle,
    minWidth: sizeStyle,
    maxWidth: sizeStyle,
  }
}
