<template>
    <button :type="tipo" class="inline-block px-4 py-2 cursor-pointer m-3 text-base md:text-xl font-mono font-bold" :class="{'bg-white text-black':reverse, 'bg-black text-white':!reverse }">
        <slot/>
    </button>
</template>

<script setup lang="ts">
defineProps({
    tipo:String,
    reverse:Boolean
});
</script>