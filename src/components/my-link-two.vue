<template>
    <NuxtLink :to="href" class="flex items-center gap-0 hover:gap-3 duration-200">
        <slot/>
        <MyIcon icon="eva:arrow-right-fill"/>
    </NuxtLink>
</template>

<script setup lang="ts">
type TMyLinkTo = {
    href:string
}

defineProps(['href']) as TMyLinkTo

</script>