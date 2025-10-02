import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base: '/portfolio-2025/',
  plugins: [react()],
  server: {
    port: 3001,
  },
})