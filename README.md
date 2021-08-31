# vite-vue3-boilerplate

Boilerplate for Vue 3 using Vite and adding some plugins to bring some Nuxt-like features
(e.g. auto-importing components and auto-routing setup)

## Installation

```
npm i -g pnpm (in case you don't have pnpm installed - yarn/npm also work, but pnpm is recommended)
pnpm i
```

---

## Running a development server

```
pnpm dev
```

---

## Features

- ESLint ✔️
- TypeScript ✔️
- Auto-import components from `/src/components` with TS support✔️
- Auto setup router for pages in `/src/pages` ✔️
- Dynamic routes using `/src/pages/[slug].vue` ✔️
- Nuxt-like layout setup ✔️
- Store setup using [Pinia](https://pinia.esm.dev/)✔️
- Auto-import plugins from `/src/plugins` ✔️

---

## How-to's

### Store data persistance

This boilerplate is currently setup to persist the data of the stores in the `storesToPersist`
variable in `main.ts`, so if you need to persist data from a store, just add it to the array

---

## Why's

### Pinia over Vuex

- Better TypeScript support
- No need for mutations
- Seems to be a better match with Composition API
