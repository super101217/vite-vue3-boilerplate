import { promiseTimeout } from '@vueuse/core'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: '',
      loading: false,
    }
  },
  getters: {
    /**
     * Checks if the user is logged in
     * @param state - Store state
     * @returns True if user is logged in
     */
    isLoggedIn(state) {
      return state.token !== ''
    },
  },
  actions: {
    /**
     * Logs the user in (just generates a random uuid and sets it as the token after 1s)
     */
    async login() {
      this.loading = true
      await promiseTimeout(1000)
      this.loading = false
      this.token = uuidv4()
    },
    /**
     * Logs the user out (clears the token)
     */
    logout() {
      this.token = ''
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
