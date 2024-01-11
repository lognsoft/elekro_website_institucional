<template>
    <NuxtLink :to="endereco" class="text-2xl duration-200 flex items-center gap-0 hover:text-teal-400 hover:gap-3">
        <span>{{ text }}</span>
        <Icon name="ic:baseline-play-arrow"/>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
    endereco: String,
    text: String,
})
</script>