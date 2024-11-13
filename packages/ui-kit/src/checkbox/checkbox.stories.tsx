import { useCallback, useState } from 'react'

import { Checkbox } from './checkbox'

import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Checkbox> = {
  title: 'ui-kit / Atoms / Checkbox',
  component: Checkbox,
}

export default meta

export const Default: StoryFn<typeof Checkbox> = (args) => {
  const [checkboxes, setCheckboxes] = useState([true, false, true, false])

  const handleChange = useCallback(
    (newIndex: number) => (newValue: boolean) => {
      setCheckboxes(
        checkboxes.map((oldValue, index) =>
          index === newIndex ? newValue : oldValue,
        ),
      )
    },
    [checkboxes],
  )

  return (
    <div className="flex flex-col gap-y-3">
      {checkboxes.map((value, idx) => (
        <Checkbox
          key={idx}
          {...args}
          value={value}
          onChange={handleChange(idx)}
        >
          Checkbox #{idx}
        </Checkbox>
      ))}
    </div>
  )
}
