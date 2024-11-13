import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  define: {
    'process.env._TIME_ENTRY_': String(Date.now()),
    'process.env.GITHUB_SHA': `"${process.env.GITHUB_SHA}"` || '"_"',
    'process.env.TZ': `"${process.env.TZ}"` || '"_"',
  },
})
