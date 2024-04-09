<template>
    <button
        class="inline-block px-4 py-2 cursor-pointer text-base md:text-xl duration-200 rounded-lg"
        :class="{'bg-white text-black':reverse, 'bg-black text-white':!reverse }"
    >
        <slot/>
    </button>
</template>

<script setup lang="ts">
defineProps({
    reverse:{
        type:Boolean,
        default:false
    },
});
</script>