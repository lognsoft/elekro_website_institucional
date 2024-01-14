<template>
    <NuxtLink
    :to="href" class="inline-block px-4 py-2 cursor-pointer m-3 text-base md:text-xl font-mono font-bold"
    :class="{'bg-white text-black hover:bg-slate-300':reverse, 'bg-black text-white hover:bg-gray-700':!reverse }">
        <slot/>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
    href:String,
    reverse:Boolean
})
</script>