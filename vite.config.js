import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    minify: 'terser', 
    base: 'https://eric-wagner-portfolio.herokuapp.com', 
  },
  server: {
    port: process.env.PORT || 3001,
  }
})
