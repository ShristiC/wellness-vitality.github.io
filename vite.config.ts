import { copyFileSync } from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves static files and returns 404.html for any path that
// doesn't map to a real file. Since this is a client-side-routed SPA, we copy
// index.html to 404.html so deep links like /about boot the app and let
// React Router render the correct route.
function spaFallback() {
  return {
    name: 'spa-404-fallback',
    closeBundle() {
      const dir = resolve(__dirname, 'dist')
      copyFileSync(resolve(dir, 'index.html'), resolve(dir, '404.html'))
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
})
