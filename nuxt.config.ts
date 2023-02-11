export default defineNuxtConfig({
  modules: ['@element-plus/nuxt'],
  css: ['@/assets/style/main.css', '@/assets/reset.css', '@/assets/elementplus-reset.scss'],
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:1337', // 这里是接口地址
          changeOrigin: true
        },
        '^/api': {
          target: 'http://127.0.0.1:1337', // 这里是接口地址
          changeOrigin: true
        }
      }
    }
  }
})
