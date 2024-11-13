import sharedConfig from '@repo/tailwind-config/tailwind.config'

import type { Config } from 'tailwindcss'

const config: Config = {
  ...sharedConfig,
  content: [
    '../../apps/web-client/src/**/*.{ts,tsx}',
    '../../packages/ui-kit/src/**/*.{ts,tsx}',
  ],
}

export default config
