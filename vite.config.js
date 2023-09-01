import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    minify: 'terser',
    base: '/React-Portfolio-Eric-Wagner', 
  },
  server: {
    port: 3001,
    open: true
  }
})
