import { Radio } from './radio'

import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Radio> = {
  title: 'ui-kit / Atoms / Radio',
  component: Radio,
}

export default meta

const name = 'block'

export const Default: StoryFn<typeof Radio> = (args) => (
  <div className="flex flex-col gap-y-3">
    <Radio {...args} value="first" name={name}>
      first
    </Radio>
    <Radio {...args} value="second" name={name}>
      second
    </Radio>
    <Radio {...args} value="third" name={name}>
      third
    </Radio>
    <Radio {...args} value="four" name={name}>
      four
    </Radio>
  </div>
)
