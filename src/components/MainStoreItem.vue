<script setup>
    import { faker } from '@faker-js/faker'
    const itemName = faker.commerce.productName()
    const color = faker.color.human()
    const material = faker.commerce.productMaterial()
    const itemCategory = faker.lorem.lines(1)
    const department = faker.commerce.department()

    const itemDesc = `Introducing our latest ${itemName}, available in a stylish ${color}. Crafted with premium ${material}, perfect for any ${department} enthusiast.`

</script>

<template>
        <div class="border border-blue-300 rounded-lg shadow bg-blue-400 h-full">
            <img class="object-fill h-480 w-960 rounded-t-lg" v-bind:src="faker.image.urlLoremFlickr({category: '3DPrints', height: 480, width: 960})" />
            <div class="p-4">
                <p class="mb-2 font-extrabold text-blue-900">{{ itemName }}</p>
                <p class="mb-3 font-normal text-slate-700">{{ itemCategory }}</p>
            </div>
        </div>
</template>