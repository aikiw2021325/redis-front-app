import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: "http://192.168.11.9:8080",
        changeOrigin: true,               // オリジンをターゲットに合わせて変更
        secure: false,                    // HTTPSの場合はtrue。HTTPならfalse
        rewrite: (path) => path.replace('/api', ''), // APIパスをバックエンドに合わせる
      }
    },
  },
})
