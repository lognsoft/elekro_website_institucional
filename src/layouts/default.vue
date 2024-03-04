<template>
    <HeaderDefault/>
        <slot/>
    <FooterDefault/>
</template>

<script setup lang="ts">
useSeoMeta({
    titleTemplate : (titleChunck) => {
        return titleChunck ? `Elekro - ${titleChunck}`: "Elekro";
    },
})
</script>

