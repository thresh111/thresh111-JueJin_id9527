import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "F:/vscode/code-f/thresh111-JueJin_id9527/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}