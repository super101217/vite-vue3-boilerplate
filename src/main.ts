import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// @ts-ignore: globEager is a Vite-only feature
const plugins = import.meta.globEager('./plugins/*.js')
export const app = createApp(App)
// Apply router
app.use(router)
// Apply plugin
for (const plugin in plugins) {
  app.use(plugins[plugin].default)
}
// Mounting the app
app.mount('#app')
