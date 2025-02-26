<template>
  <nav class="bg-blue-800 h-20 items-center text-white">
    <RouterLink :to="{name: 'Store'}">Store</RouterLink>
    <RouterLink :to="{name: 'Cart'}">Cart</RouterLink>
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