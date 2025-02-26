<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
    <main class="flex flex-col items-center justify-center min-h-screen">
        <p class="text-4xl font-thin text-black">{{ route.params.name }}</p>
        <p class="text-2xl font-thin text-black">{{ route.params.desc }}</p>
        <button class="bg-green-500 mt-4 px-4 py-2 hover:bg-green-800 hover:text-white">Add to Cart</button>
    </main>
    
</template>