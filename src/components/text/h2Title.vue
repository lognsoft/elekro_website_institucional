<script setup lang="ts">
defineProps<{ bold?:"bold" | "normal" | "light" | undefined }>()
</script>

<template>
    <h2 class="h2-title" :class="{
        'font-bold': bold == 'bold' || bold == undefined,
        'font-normal': bold === 'normal',
        'font-ligth': bold === 'light'
    }"><slot/></h2>
</template>

<style scoped>
.h2-title{
    @apply text-2xl md:text-[28px]
}
</style>