import type { BadgeColorType } from './types'

export const badgeColorMap: Record<BadgeColorType, string> = {
  gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  indigo:
    'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900',
  info: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800',
  pink: 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900',
  purple:
    'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900',
  success: 'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900',
  warning:
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900',
  failure: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900',
  orange:
    'bg-orange-100 text-orange-800 dark:bg-orange-200 dark:text-orange-800',
}
