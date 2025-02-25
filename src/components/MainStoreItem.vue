<script setup>
    import { faker } from '@faker-js/faker'
    const itemName = faker.commerce.productName()
    const color = faker.color.human()
    const material = faker.commerce.productMaterial()
    const department = faker.commerce.department()
    const itemDesc = `Introducing our latest ${itemName}, available in a stylish ${color}. Crafted with premium ${material}, perfect for any ${department} enthusiast.`

</script>

<template>

    {{ itemName }}<br />
    {{ itemDesc }}<br /><br />


</template>