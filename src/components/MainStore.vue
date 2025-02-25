<script setup>
    import MainStoreItem from './MainStoreItem.vue';


</script>

<template>
    <MainStoreItem v-for="item in 15" :key="item"></MainStoreItem>


</template>