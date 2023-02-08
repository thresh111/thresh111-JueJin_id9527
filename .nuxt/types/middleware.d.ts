import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "F:/vscode/code-f/thresh111-JueJin_id9527/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}