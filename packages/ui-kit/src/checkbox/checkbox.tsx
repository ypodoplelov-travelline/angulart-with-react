import { useCallback } from 'react'

import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  onChange?: (value: boolean) => void
  value: boolean
}>

export function Checkbox({ children, onChange, value }: Props) {
  const handleChange = useCallback(() => {
    if (!onChange) return
    onChange(!value)
  }, [onChange, value])

  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="shrink-0 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        checked={value}
        onChange={handleChange}
      />
      <div className="leading-4 text-sm font-medium ml-2">{children}</div>
    </label>
  )
}
