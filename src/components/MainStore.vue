<script setup>
    import MainStoreItem from './MainStoreItem.vue';
    import MainPagination from './MainPagination.vue';

</script>

<template>
    <div class="grid grid-cols-3 gap-10 p-10">
        <MainStoreItem v-for="item in 15" :key="item"></MainStoreItem>  
    </div>
    <MainPagination></MainPagination>

</template>