import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disabled for production to reduce bundle size
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['aos']
        }
      }
    }
  },
  base: './',
  publicDir: 'public',
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
})