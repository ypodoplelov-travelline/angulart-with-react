import { Icon, type IconName } from '../icons'
import { type AssetSizeType } from '../icons/types'
import { Swap } from '../swap'

import type { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  iconName?: IconName
  iconSize?: AssetSizeType
  shape?: ButtonShape
  isDisabled?: boolean
  onClick?: () => void
}

const shapeMap: Record<ButtonShape, string> = {
  circle: 'rounded-full w-14 h-14 flex items-center justify-center',
  rect: ' rounded-lg',
}

export type ButtonShape = 'rect' | 'circle'

const baseColors =
  'text-gray-900 bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'

const baseClass =
  'shadow-sm dark:shadow-slate-950 py-2.5 px-3 text-sm font-medium focus:outline-none border focus:z-10 focus:ring-4 focus:ring-gray-100 inline-flex gap-2 items-center'

export function Button({
  children,
  iconName,
  iconSize,

  onClick,
  isDisabled,
  shape = 'rect',
}: Props) {
  const shapeClass = shapeMap[shape] || ''

  const buttonClass = `${baseClass} ${baseColors} ${shapeClass}`
  return (
    <button onClick={onClick} disabled={isDisabled} className={buttonClass}>
      <Swap has={!!iconName}>
        {!!iconName && <Icon name={iconName} size={iconSize} />}
      </Swap>
      {children}
    </button>
  )
}
