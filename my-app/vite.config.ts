import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // 根據環境變數決定 base 路徑
  // npm run build：用於 Firebase Hosting (base = '/')
  // npm run build:github：用於 GitHub Pages (base = '/yui_moartplanner_2026_01/yui_moartplanner_2026_1.1/')
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  build: {
    minify: 'esbuild',
    cssMinify: 'esbuild',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
})
