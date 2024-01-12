<template>
    <button :type="tipo" class="bg-black text-white inline-block px-4 py-2 cursor-pointer m-3 text-2xl font-mono font-bold" :class="{'bg-white text-black':reverse}">
        <slot/>
    </button>
</template>

<script setup lang="ts">
defineProps({
    tipo:String,
    reverse:Boolean
});
</script>