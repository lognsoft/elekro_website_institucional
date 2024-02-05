<template>
    <NuxtLink
    :to="props.href" class="inline-block px-4 py-2 cursor-pointer m-3 text-base md:text-xl font-bold"
    :class="{'bg-white text-black hover:bg-slate-300':props.reverse, 'bg-black text-white hover:bg-gray-700':!props.reverse }">
        <slot/>
    </NuxtLink>
</template>

<script setup lang="ts">
import type IMyLink from '~/interfaces/IMyLink';
const props:Readonly<IMyLink> = defineProps(['href', 'reverse']) as Readonly<IMyLink>;
</script>