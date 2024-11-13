import { badgeColorMap } from './badge-color-map'

import type { ReactNode } from 'react'
import type { BadgeColorType, BadgeSizeType } from './types'

type BadgeProps = {
  color?: BadgeColorType
  size?: BadgeSizeType
  children?: ReactNode
  withMarginLeft?: boolean
}

const sizeMap: Record<BadgeSizeType, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
}

export function Badge({
  withMarginLeft,
  color = 'gray',
  size = 'sm',
  children,
}: BadgeProps) {
  const sizeClass = sizeMap[size]
  const colorClass = badgeColorMap[color]
  const ml = withMarginLeft ? 'ml-2' : ''
  return (
    <span
      className={`bg mr-2 rounded px-2.5 py-0.5 font-medium inline-flex items-center ${ml} ${sizeClass} ${colorClass}`}
    >
      {children}
    </span>
  )
}
