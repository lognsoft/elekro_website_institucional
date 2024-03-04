<template>
    slide
</template>

<script setup>
defineProps(['images'])
</script>

<style scoped>

    .carousel__viewport{
        @apply shadow-xl
    }
    .carousel__slide{
        @apply aspect-[5/3] rounded-lg overflow-hidden
    }

    .carousel__pagination-button .carousel__pagination-button--active::after {
        @apply w-3 aspect-[1/1] block
    }
</style>