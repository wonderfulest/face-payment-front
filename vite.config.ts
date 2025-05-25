import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        // target: 'http://localhost:8080',
        target: 'https://api.wristo.io',
        changeOrigin: true, // 如果目标服务器的域名不同，这个选项需要设置为 true
        // rewrite: (path) => path.replace(/^\/api/, ''), // 去掉路径前缀
      }
    }
  },
})
