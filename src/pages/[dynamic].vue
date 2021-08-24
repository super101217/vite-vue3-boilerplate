<template>
  <div>This is a dynamic route! The path is {{ path }}</div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.path)
const path = ref(route.path)
</script>

<style lang="scss" scoped></style>
