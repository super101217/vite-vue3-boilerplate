import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// @ts-ignore: globEager is a Vite-only feature
const plugins = import.meta.globEager('./plugins/*.js')
export const app = createApp(App)

// Apply router
app.use(router)
// Apply store
const pinia = createPinia()
if (localStorage.getItem('piniaState')) {
  pinia.state.value = JSON.parse(localStorage.getItem('piniaState') || '{}')
}
app.use(pinia)
watch(
  pinia.state,
  (state) => {
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)
// Apply plugin
for (const plugin in plugins) {
  app.use(plugins[plugin].default)
}
// Mounting the app
app.mount('#app')
