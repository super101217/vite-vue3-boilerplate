# vite-vue3-boilerplate

Boilerplate for Vue 3 using Vite, trying to replicate some of Nuxt features

## Installation

```
npm i -g pnpm (in case you don't have pnpm installed - yarn/npm also work, but pnpm is recommended)
pnpm i
```

## Features

- ESLint ✔️
- Auto-import components from `/src/components` ✔️
- Auto setup router for pages in `/src/pages` ✔️
- Dynamic routes using `/src/pages/[slug].vue` ✔️
- Nuxt-like layout setup ✔️
- Auto-import store modules in `/src/store/modules` ✔️
- Auto-import plugins in `/src/plugins` ✔️
- Nuxt-like middlewares - Currently able to access `$store`, `$router`, `env` ✔️
