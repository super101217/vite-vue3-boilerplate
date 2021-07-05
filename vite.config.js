import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import ViteComponents from 'vite-plugin-components'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), Pages(), Layouts(), ViteComponents()],
})
