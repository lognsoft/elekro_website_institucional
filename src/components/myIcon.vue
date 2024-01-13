<template>
    <ClientOnly>
        <Icon :name="icon"/>
    </ClientOnly>
</template>

<script setup lang="ts">
defineProps({
    icon: String
})
</script>