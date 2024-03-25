<template>
    <button
        :type="tipo"
        class="inline-block px-4 py-2 cursor-pointer m-3 text-base md:text-xl font-bold duration-200"
        :class="{'bg-white text-black hover:bg-slate-300':reverse, 'bg-black text-white hover:bg-gray-700':!reverse }"
    >
        <slot/>
    </button>
</template>

<script setup lang="ts">
defineProps({
    tipo:{
        type: String,
        default:'button'
    },
    reverse:{
        type:Boolean,
        default:false
    },
});
</script>