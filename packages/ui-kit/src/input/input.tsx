import { useCallback } from 'react'

import { Icon } from '../icons'

import type { ChangeEvent } from 'react'

type Props = {
  placeholder?: string
  disabled?: boolean
  type?: 'text' | 'search'
  value?: string
  onFocus?: () => void
  onClick?: () => void
  onChange?: (value: string) => void
}

const colorClass =
  'bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'

export function Input({
  value,
  type = 'text',
  disabled,
  placeholder,
  onChange,
  onFocus,
  onClick,
}: Props) {
  const handleChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const target = ev.target
      onChange?.(target.value)
    },
    [onChange],
  )

  const isSearchType = type === 'search'

  const usedType = isSearchType ? 'text' : type

  const isRightIconVisible = value && isSearchType

  const pClass = isRightIconVisible ? 'pr-10' : ''

  return (
    <div className="relative">
      <input
        onFocus={onFocus}
        placeholder={placeholder}
        disabled={disabled}
        type={usedType}
        value={value}
        onChange={handleChange}
        onClick={onClick}
        className={`border text-sm rounded-lg block w-full p-2.5 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${colorClass} ${pClass}`}
      />
      {!!isRightIconVisible && (
        <button
          onClick={() => {
            onChange?.('')
          }}
          disabled={disabled}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
        >
          <Icon name="Close" />
        </button>
      )}
    </div>
  )
}
