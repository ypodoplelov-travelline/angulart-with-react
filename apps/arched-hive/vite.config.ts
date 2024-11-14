import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 5100,
  },
  resolve: {
    alias: {
      '@arched-client': resolve(__dirname, './src/modules'),
      '@assets': resolve(__dirname, './src/assets'),
      '@public': resolve(__dirname, './public'),
    },
  },
})
