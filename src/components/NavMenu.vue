<script setup>

import { useAuth } from '../composables/useAuth'
const { isAuthenticated, logout, user } = useAuth()

</script>

<template>
  <nav class="bg-green-800 h-20 items-center text-white font-bold">
    <RouterLink :to="{name: 'Store'}">Store</RouterLink>
    <RouterLink :to="{name: 'Cart'}">Cart</RouterLink>

      <div v-if="isAuthenticated">
      Welcome {{ user.email }}
      <button @click="logout" class="rounded-md bg-red-500 px-4 py-2 mx-2 text-red-100 hover:bg-red-700">LOGOUT</button>
      <RouterLink :to="{name: 'AccountDetails'}">Account Details</RouterLink>
    </div>
    <div v-else="">
      <RouterLink :to="{name: 'Login'}">Login</RouterLink>
    </div>
    
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>