import { Spinner } from './spinner'

import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Spinner> = {
  title: 'ui-kit / Atoms / Spinner',
  component: Spinner,
}

export default meta

export const Default: StoryFn<typeof Spinner> = (args) => <Spinner {...args} />

Default.args = {
  size: 'sm',
}
