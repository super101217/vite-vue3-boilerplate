<template>
  <router-link to="/test">Change route</router-link>
  <div>Test index Page</div>
  <hello-world />
  <div>
    Authentication Status: {{ authStore.isLoggedIn ? '' : 'Not' }} Logged In
  </div>
  <div>
    <button class="mr" @click="authStore.login">Login</button>
    <button @click="authStore.logout">Logout</button>
  </div>
  <div v-if="authStore.loading">Realizando login...</div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
</script>

<style scoped>
.mr {
  margin-right: 1rem;
}
</style>
