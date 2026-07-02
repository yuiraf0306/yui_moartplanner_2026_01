import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // 🔧 對於 Firebase Hosting 使用 '/'，對於 GitHub Pages 使用完整路徑
  // Firebase Hosting: base: '/'
  // GitHub Pages: base: '/yui_moartplanner_2026_01/yui_moartplanner_2026_1.1/'
  // 目前使用 '/' 供 Firebase Hosting 使用
  base: '/',
  plugins: [react()],
  build: {
    minify: 'esbuild',
    cssMinify: 'esbuild',
    // 確保資源正確生成
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
})
