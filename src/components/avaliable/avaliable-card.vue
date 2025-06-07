<script setup lang="ts">
  import { type IAvaliableCard } from '~/core/types';
  const props = defineProps<IAvaliableCard>();
  const result:Ref<number> = ref(0)

  onMounted(() => {
    if(props.stars > 0){
      result.value = (props.stars / 5) * 100;
    }
  })


</script>

<template>
  <div class="card-avaliable">
    <div>
      <h3 class="card-name">{{ name }}</h3>
      <div>
        <p v-for="paragraph, index in avaliable" :key="`paragraph-${index}`">{{ paragraph }}</p>
      </div>
    </div>
    <div>
      <div class="star-container">
        <Icon name="ph:star-light"></Icon>
        <Icon name="ph:star-light"></Icon>
        <Icon name="ph:star-light"></Icon>
        <Icon name="ph:star-light"></Icon>
        <Icon name="ph:star-light"></Icon>
        <div class="star-avaliable" :style="`width: ${result}%`">
          <div class="stars">
            <Icon name="ph:star-fill"></Icon>
            <Icon name="ph:star-fill"></Icon>
            <Icon name="ph:star-fill"></Icon>
            <Icon name="ph:star-fill"></Icon>
            <Icon name="ph:star-fill"></Icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-name{
  @apply
  mb-3
}
.card-avaliable{
  @apply
  text-white
  bg-black
  min-h-[450px]
  flex
  flex-col
  justify-between
  py-5
  px-5
  rounded-lg
}

.star-container{
  @apply
  inline-flex
  items-center
  relative
  text-[15px]
  mt-10
}

.star-avaliable{
  @apply
  inline-flex
  absolute
  top-0
  left-0
  overflow-hidden
  bg-black
}

.stars{
  @apply
  inline-flex
  text-[15px]
  flex-nowrap
  text-yellow-300
}
</style>