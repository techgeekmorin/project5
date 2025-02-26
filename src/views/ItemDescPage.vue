<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
    <main class="flex flex-col items-center justify-center min-h-screen">
        <p class="text-4xl font-thin text-black">{{ route.params.name }}</p>
        <p class="text-2xl font-thin text-black">{{ route.params.desc }}</p>
    </main>
    
</template>