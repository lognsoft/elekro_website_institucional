<template>
  <section ref="section" class="relative overflow-hidden h-screen  z-[-10]" id="fixedSection">
  <figure class="h-full w-full fixed">
      <img class="h-full object-cover w-full max-lg:hidden" src="/images/elekro-one/Header.png" alt="Fundo do cabeçalho" />
      <img class="h-screen w-full lg:hidden" src="/images/elekro-one/mobile/02Mobile_HeaderFundo.png" alt="Fundo do cabeçalho" />
    </figure>
    <figure class="w-full h-full fixed">
      <img class="w-[90%] h-auto object-cover absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden lg:block" src="/images/elekro-one/Dupla_SemFundo3.png" alt="Duas fechaduras" />
      <img class="max-sm:w-full h-[60%] lg:hidden absolute top-[37%] sm:top-[37%] left-1/2 -translate-x-1/2 object-contain" src="/images/elekro-one/Dupla_SemFundo3.png" alt="Fechadura" />
    </figure>
      <div class="py-5 md:px-10 px-2 fixed z-[1] h-full w-full " >
        <div class="mx-auto max-w-[1900px] flex max-lg:mt-14 h-full relative lg:items-center max-lg:justify-center max-lg:text-center xl:pb-60 pb-28" >
          <div class="max-lg:text-center max-sm:mt-10 max-lg:mt-10 max-w-[1700px] mx-auto w-full " :style="`opacity: ${opacity}%`">
            <a class="lg:text-xl ml-0 border px-2 py-1 border-white text-white rounded-lg" href="javascript:void(0)">Faça parte</a>
            <h1 class="banner-title !mt-5 max-lg:!text-center text-white">Revolucione</h1>
            <p class="banner-text max-lg:!text-center text-white">Conheça a <br class="lg:hidden" /> Elekro Signature</p>
          </div>
        </div>
      </div>
  </section>
  
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';

const opacity: Ref<number> = ref(100);

onMounted(() => {
  window.addEventListener("scroll", scrollEffects);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollEffects);
});

function scrollEffects() {
  // Altura atual do scroll
  const documentScroll: number = document.scrollingElement?.scrollTop as number;
  const windowHeight: number = window.innerHeight;

  // Calcula a opacidade com base no scroll
  const percent: number = 100 - (documentScroll / windowHeight) * 150;
  opacity.value = Math.max(0, Math.min(percent, 100));
  console.log(opacity.value)
}

</script>

<style scoped>
.banner-title {
  @apply text-start text-[30px] md:text-[60px] xl:text-[80px] font-bold leading-[40px] md:leading-[70px] lg:leading-[100px] lg:mt-5 mt-8;
}
.banner-text {
  @apply lg:max-w-[250px] text-xl lg:text-2xl xl:text-5xl text-start font-light lg:mt-0 mt-2;
}
.scroll-section {
  height: 100vh;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  background-color: lightblue; /* Ajuste conforme necessário */
}
</style>