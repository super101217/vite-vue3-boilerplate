<template>
  <div>This is a dynamic route! The path is {{ path }}</div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    console.log(route.path)
    return { path: route.path }
  },
}
</script>

<style lang="scss" scoped></style>
