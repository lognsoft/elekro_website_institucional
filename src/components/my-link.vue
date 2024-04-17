<template>
    <NuxtLink
    :to="props.href" class="inline-block px-4 py-2 cursor-pointer m-3 text-base md:text-xl rounded-md"
    :class="{'bg-white text-black':props.reverse, 'bg-black text-white':!props.reverse }">
        <slot/>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { MyLink } from '~/core/types';
const props = withDefaults(defineProps<MyLink>(),{
    href:'',
    reverse:false
})
</script>