// 路由守卫， 实现重定向 https://nuxt.com.cn/docs/guide/directory-structure/middleware#format
export default defineNuxtRouteMiddleware(to => {
  if (to.fullPath === '/') {
    // 重定向
    return navigateTo('/home')
  }
})
