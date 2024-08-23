<template>
    <button
        class="inline-block cursor-pointer  px-7 rounded-full py-2.5 text-white bg-[#0171E3] font-light text-base hover:brightness-105 text-center"
        
        >
        <!-- :class="{'bg-white text-black':reverse, 'bg-[#0071e3] hover:brightness-105 text-white':!reverse } " -->
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