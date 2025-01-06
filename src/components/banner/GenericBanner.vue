<script setup lang="ts">
defineProps<{ image: string }>();


</script>

<template>
    <div class="banner-container">
        <img class="image-banner" :src="image" alt="banner"/>
        <div class="my_container">
            <slot/>
        </div>
    </div>
</template>

<style scoped>
    .banner-container{
        @apply
        h-screen
        min-h-[700px]
        w-full
        relative
        py-20
        text-white
    }
    .banner-container .image-banner{
        @apply
        w-full
        h-full
        object-cover
        absolute
        top-0
        left-0
    }

    .banner-container .my_container{
        @apply
        relative
        z-10
        mx-auto
        w-full
        h-full
        max-w-[80%]
        px-4
    }
</style>