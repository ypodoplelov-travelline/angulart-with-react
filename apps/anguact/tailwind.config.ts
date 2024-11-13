import sharedConfig from '@repo/tailwind-config/tailwind.config'

import type { Config } from 'tailwindcss'

const config: Config = {
  ...sharedConfig,
  content: [
    './src/modules/**/*.{ts,tsx}',
    '../../packages/ui-kit/src/**/*.{ts,tsx}',
  ],
}

export default config
