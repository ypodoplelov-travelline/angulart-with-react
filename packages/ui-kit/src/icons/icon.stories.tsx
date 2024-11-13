import { useState } from 'react'

import { Input } from '../input'

import * as assets from './assets-svg'
import { Icon } from './icon'

import type { Meta, StoryFn } from '@storybook/react'
import type { IconName } from './icon'
import type { AssetSizeType } from './types'

const meta: Meta<typeof Icon> = {
  title: 'ui-kit / Atoms / Icon',
  component: Icon,
}

export default meta

function Icons({
  filter,
  containerSize,
  size,
}: {
  filter: string
  containerSize: number
  size?: AssetSizeType
}) {
  const lowerFilter = filter.toLowerCase()
  return (
    <div className="flex flex-wrap">
      {Object.keys(assets).map((key) => {
        const isPassed = !filter
          ? true
          : key.toLowerCase().includes(lowerFilter)
        if (!isPassed) return null
        return (
          <div
            key={key}
            className="m-px border flex items-center justify-center border-primary-700"
            style={{
              width: `${containerSize}px`,
              height: `${containerSize}px`,
            }}
            title={key}
          >
            <Icon name={key as IconName} size={size} />
          </div>
        )
      })}
    </div>
  )
}

export const Default: StoryFn<typeof Icon> = () => {
  const [value, setValue] = useState('')
  return (
    <div className="flex-col flex gap-6">
      <Input value={value} onChange={setValue} />
      <div className="flex text-gray-400">
        <Icons containerSize={24} filter={value} />
      </div>
      <div className="flex text-gray-400">
        <Icons containerSize={52} size="xl" filter={value} />
      </div>
    </div>
  )
}

Default.args = {
  name: 'Trash',
}

export const SingleIcon: StoryFn<typeof Icon> = (args) => {
  return <Icon {...args} />
}

SingleIcon.args = {
  name: 'Trash',
}
