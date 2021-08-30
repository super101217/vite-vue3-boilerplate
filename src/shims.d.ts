/* eslint-disable import/no-duplicates */

declare interface Window {
  // extend the window
}

declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ReturnType<ComponentOptions>
  export default component
}
