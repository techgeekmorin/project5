<script setup>
import { faker } from '@faker-js/faker'
const aboutUs = faker.lorem.lines(5)

</script>

<template>
    <main class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-6xl font-extrabold text-black">My Store Home Page</h1>
    <img class="object-fill h-100 w-300" v-bind:src="faker.image.urlLoremFlickr({category: 'Store', height: 480, width: 640})" />
    <h2 class="text-6xl font-thin text-black underline">About Us</h2>
    <h3 class="text-3xl font-thin text-black">{{ aboutUs }}</h3>

  </main>
</template>