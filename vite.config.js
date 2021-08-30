import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import ViteComponents from 'vite-plugin-components'
import * as path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Pages(),
    Layouts(),
    ViteComponents({
      globalComponentsDeclaration: true,
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '~', replacement: path.resolve(__dirname, './src') },
    ],
  },
  server: {
    fs: {
      allow: ['.'],
    },
  },
})
