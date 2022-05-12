import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

export const app = createApp(App)

// Router setup (vue-router)
app.use(router)

// Mounting the app
app.mount('#app')
