import { Swap } from './swap'

import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Swap> = {
  title: 'ui-kit / Atoms / Swap',
  component: Swap,
}

export default meta
export const Default: StoryFn<typeof Swap> = (args) => <Swap {...args} />
Default.args = {
  children: <div title="First header">first</div>,
  isSlot: <div title="Second header">second</div>,
}
