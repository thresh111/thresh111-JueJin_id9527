export default defineNuxtConfig({
  modules: ['@element-plus/nuxt', 'nuxt-purgecss', '@nuxt/devtools', '@nuxt/content', '@nuxtjs/color-mode'],
  css: ['@/assets/style/main.scss', '@/assets/reset.css', '@/assets/elementplus-reset.scss'],
  devtools: {
    enabled: true,
    vscode: {
      // enabled: true,
      // startOnBoot: false,
      // reuseExistingServer: true,
      // medium: 'tunnel',
      // tunnel: 'laughing-penguin'
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_APP_SERVICE_URL
    }
  }
  // 废弃, 保存待用
  // vite: {
  //   server: {
  //     proxy: {
  //       '/api': {
  //         target: 'http://127.0.0.1:1337', // 这里是接口地址
  //         changeOrigin: true
  //       },
  //       '^/api': {
  //         target: 'http://127.0.0.1:1337', // 这里是接口地址
  //         changeOrigin: true
  //       }
  //     }
  //   }
  // }
})
