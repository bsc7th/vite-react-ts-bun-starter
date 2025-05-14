import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import Checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), Checker({ typescript: true })]
})
