import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import ViteComponents from 'vite-plugin-components'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue(), Pages(), Layouts(), ViteComponents()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve('/src') },
      { find: '~', replacement: path.resolve('/src') },
    ],
  },
})
