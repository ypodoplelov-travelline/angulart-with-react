import { env } from '@dotenv-run/core'
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config'
import path from 'node:path'

env({
  root: '../..',
  verbose: true,
})

const config = mergeConfig(
  {}, // Extending from an existing Vite configuration (`vite.config.ts` file)
  // @ts-ignore
  defineConfig({
    test: {
      ...configDefaults, // Extending Vitest's default options
      setupFiles: [path.join(__dirname, './setup.ts')],
    },
  }),
)

export default config
