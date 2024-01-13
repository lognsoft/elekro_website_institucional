<template>
    <NuxtLink :to="endereco" class="text-2xl duration-200 flex items-center gap-0 hover:gap-3">
        <span>
            <slot/>
        </span>
        <MyIcon icon="ic:baseline-play-arrow"/>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
    endereco: String,
})
</script>