<template>
  <div>
    <MyButtonTwo class="lg:block hidden !px-5" @click="isModalOpen = true">
      <img class="w-4" src="/images/icone-mais.png" alt="" />
    </MyButtonTwo>

    <teleport to="body">
      <transition name="fade">
        <div
            v-if="isModalOpen"
            class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]"
        >
          <div class="bg-white p-5 rounded-lg w-[40vw] h-[80vh]">
            <div class="flex justify-end">
              <button @click="isModalOpen = false" class="py-2 px-5 bg-[#666664] text-white rounded-full">
                x
              </button>
            </div>
            <div class="flex flex-col justify-items-center items-center justify-evenly text-center 2xl:px-20 h-full">
              <h2 class="titleh2">{{ tituloP }}</h2>
              <div>
                <h3 class="titleh3">{{ titulo }}</h3>
                <h4 class="titleh4 max-w-96">{{ texto }}</h4>
              </div>
              <div>
                <h3 class="titleh3">{{ titulo2 }}</h3>
                <h4 class="titleh4 max-w-96">{{ texto2 }}</h4>
              </div>
              <div>
                <h3 class="titleh3">{{ titulo3 }}</h3>
                <h4 class="titleh4 max-w-96">{{ texto3 }}</h4>
              </div>
              <div>
                <h3 class="titleh3">{{ titulo4 }}</h3>
                <h4 class="titleh4 max-w-96">{{ texto4 }}</h4>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
    tituloP:{
        type:String,
        default:''
    },
    titulo:{
        type:String,
        default:''
    },
    texto:{
        type:String,
        default:''
    },
    titulo2:{
        type:String,
        default:''
    },
    texto2:{
        type:String,
        default:''
    },
    titulo3:{
        type:String,
        default:''
    },
    texto3:{
        type:String,
        default:''
    },
    titulo4:{
        type:String,
        default:''
    },
    texto4:{
        type:String,
        default:''
    },
})



const isModalOpen = ref(false);

watch(isModalOpen, (newValue) => {
  document.body.style.overflow = newValue ? 'hidden' : '';
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.titleh2 {
  @apply xl:text-2xl font-semibold text-xl;
}
.titleh3 {
  @apply font-semibold text-base  2xl:text-xl max-md:!leading-tight;
}
.titleh4 {
  @apply text-sm mt-2;
}
</style>
