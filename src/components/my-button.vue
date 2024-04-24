<template>
    <button
        class="inline-block px-4 py-2 cursor-pointer text-base duration-200 rounded font-light"
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