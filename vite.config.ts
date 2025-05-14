// Based on configuration from https://github.com/craftzdog/smooth-toc-example
// Author: Takuya Matsuyama (craftzdog)

import { fileURLToPath, URL } from 'url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import Checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), Checker({ typescript: true })],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      }
    ]
  },
  server: {
    port: 3000
  }
})
