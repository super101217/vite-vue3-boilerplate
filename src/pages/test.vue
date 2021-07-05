<template>
  <div>Testing Router</div>
  <router-link to="/">Change route</router-link>
</template>

<script>
export default {
  name: 'Test',
  middleware: ['exampleMiddleware'],
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
