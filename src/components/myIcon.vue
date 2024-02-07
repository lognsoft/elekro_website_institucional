<template>
        <Icon :name="icon"/>
</template>

<script setup lang="ts">
defineProps({
    icon: {
        type: String,
        default: ''
    }
})
</script>