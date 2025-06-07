<script setup lang="ts">
</script>

<template>
  <Icon name="iconamoon:arrow-down-2-thin" class="icon-arrow"/>
</template>

<style scoped>
  .icon-arrow {
  @apply text-[50px] opacity-0;
  animation: Arrow_bounce 2.5s linear infinite;
}

@keyframes Arrow_bounce {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  25%{
    opacity: 1;
    transform: translateY(5px);
  }
  50% {
    opacity: 1;
    transform: translateY(10px);
  }
  100% {
    opacity: 0;
    transform: translateY(15px);
  }
}
</style>