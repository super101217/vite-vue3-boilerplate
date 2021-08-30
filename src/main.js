import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-global-api'
const plugins = import.meta.globEager('./plugins/*.js')
export const app = createApp(App)
// Apply store
app.use(store)
// Apply router
app.use(router)
// Apply plugin
for (const plugin in plugins) {
  app.use(plugins[plugin].default)
}
// Mounting the app
app.mount('#app')
