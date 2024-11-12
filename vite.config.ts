import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

  export default defineConfig({
    plugins: [vue()],
    base: '/app',
    server: {
      proxy: {
        '/api': {
          target: 'http://192.168.24.38:8080',  // FastAPIのURL
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
  })
