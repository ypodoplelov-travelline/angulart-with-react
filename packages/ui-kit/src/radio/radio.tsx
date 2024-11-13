import { useCallback } from 'react'

import type { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  name?: string
  value: string | number
  onChange?: (selectedId: string | number) => void
}

export function Radio({ children, name, value, onChange }: Props) {
  const handleChange = useCallback(() => {
    if (!onChange) return
    onChange(value)
  }, [onChange, value])

  return (
    <div className="flex">
      <label className="flex">
        <input
          type="radio"
          name={name}
          value={value}
          className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
          onChange={handleChange}
        />
        <div className="text-sm ml-2">{children}</div>
      </label>
    </div>
  )
}
