import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
// @ts-ignore - Generated pages doesn't have type configured
import generatedRoutes from 'virtual:generated-pages'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(), routes })

export default router
