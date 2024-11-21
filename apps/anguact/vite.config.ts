// @ts-expect-error
import htmlImport from '@ayatkyo/vite-plugin-html-import'
import { env } from '@dotenv-run/core'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import { visualizer } from 'rollup-plugin-visualizer'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import inspect from 'vite-plugin-inspect'

env({
  root: '../..',
  verbose: true,
})

const config = defineConfig({
  cacheDir: '../.cache',
  clearScreen: false,
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  plugins: [
    htmlImport(),
    inspect(),
    react(),
    visualizer({
      emitFile: true,
      filename: 'stats.html',
      // template: 'sunburst'
    }),
  ],
  resolve: {
    alias: {
      '@bf-client': resolve(__dirname, './src/modules'),
      '@assets': resolve(__dirname, './src/assets'),
      '@public': resolve(__dirname, './public'),
    },
  },
  appType: 'mpa',
})

export default config
