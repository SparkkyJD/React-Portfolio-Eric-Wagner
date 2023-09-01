import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    minify: 'terser',
    base: 'eric-wagner-portfolio', 
  },
  server: {
    port: 3001,
    open: true
  }
})
