import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/yui_moartplanner_2026_01/yui_moartplanner_2026_1.1/',
  plugins: [react()],
  build: {
    minify: 'esbuild',
    cssMinify: 'esbuild'
  }
})
