import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
import Toast, { PluginOptions } from 'vue-toastification'

import '@unocss/reset/tailwind.css'
import 'vue-toastification/dist/index.css'
import 'uno.css'

export const app = createApp(App)
const head = createHead()
const options: PluginOptions = {
  timeout: 4000,
}
app.use(Toast, options)

// Router setup (vue-router)
app.use(router)

app.use(head)
// Mounting the app
app.mount('#app')
