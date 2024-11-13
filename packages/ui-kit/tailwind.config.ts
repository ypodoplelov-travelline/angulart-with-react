import sharedConfig from '@repo/tailwind-config/tailwind.config'

import type { Config } from 'tailwindcss'

const config: Pick<Config, 'prefix' | 'presets'> = {
  presets: [sharedConfig as any],
}

export default config
