<template>
  <div class="base-skeleton"/>
</template>

<style scoped>
  .base-skeleton {
    @apply
    inline-block
    bg-gray-100;
    animation: blink 800ms linear infinite;
  }

  @keyframes blink {
    0%,100%{
      @apply bg-gray-200
    }
    50%{
      @apply bg-gray-50
    }
  }
</style>
