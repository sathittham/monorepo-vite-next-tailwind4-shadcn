/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.ts'],
    globals: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@workspace/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@workspace/shared-i18n': path.resolve(__dirname, '../../packages/shared-i18n/src'),
    },
  },
})