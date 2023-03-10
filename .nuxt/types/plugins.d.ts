// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends Plugin<infer T> ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../components.plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+nuxt@3.2.0_h5nqvx6zt657irmnd4ouaingse/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+nuxt@3.2.0_h5nqvx6zt657irmnd4ouaingse/node_modules/nuxt/dist/pages/runtime/plugins/router").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+nuxt@3.2.0_h5nqvx6zt657irmnd4ouaingse/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+@nuxtjs+color-mode@3.2.0/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+@nuxtjs+color-mode@3.2.0/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client").default> &
  InjectionType<typeof import("../../node_modules/.pnpm/registry.npmmirror.com+@nuxt+devtools@0.1.2_nuxt@3.2.0/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client").default> &
  InjectionType<typeof import("../element-plus-teleports.plugin").default> &
  InjectionType<typeof import("../element-plus-injection.plugin").default> &
  InjectionType<typeof import("../../plugins/vue-dompurify-html").default>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
