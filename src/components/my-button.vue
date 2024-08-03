<template>
    <button
        class="inline-block px-7 py-2.5 cursor-pointer text-base duration-200 rounded-full font-light"
        :class="{'bg-white text-black':reverse, 'bg-[#0071e3] hover:brightness-105 text-white':!reverse } "
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