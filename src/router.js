import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

// for (const route of generatedRoutes) {
//   console.log(route)
//   route.on
// }
const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(), routes })

export default router
