<template>
  <section ref="section" class="relative  max-lg:h-[80vh] h-screen " id="fixedSection">
  <figure class="h-full w-full fixed top-0 left-0">
      <img class="h-full object-cover max-lg:hidden w-full " src="/images/elekro-one/Signature-3.png" alt="Fundo do cabeçalho" />
      <img class="w-full object-cover max-lg:h-[80vh] h-screen object-[20%] lg:hidden" src="/images/elekro-one/Signature-3.png" alt="Fundo do cabeçalho" />
    </figure>
    <figure class="w-full h-full fixed">
      <img class="w-[35%] h-auto object-cover absolute xl:ml-[10%] top-1/2 -translate-y-1/2 hidden lg:block" src="/images/elekro-one/fechaduraSolo.png" alt="Duas fechaduras" />

    </figure>
      <div class="py-5 md:px-10 px-2 fixed z-[1] h-full w-full pt-24" >
        <div
            class="lg:ml-[49%] max-w-[1900px] flex h-full relative lg:items-center max-lg:justify-center max-lg:text-center " >
          <div
              class="spacing-height max-lg:text-center relative max-md:mt-6 max-w-[1700px] mx-auto w-full flex flex-col gap-10 md:gap-2 items-center text-white" :style="`opacity: ${opacity}%`">
            <!-- <h1 class="banner-title  max-lg:!text-center">Revolucione</h1>

              <p class="banner-text left-[10%] relative after:content-['Signature'] after:absolute after:top-full after:-right-full after:font-[AustraliaSignature] after:text-6xl">Coleção</p> -->
              <!-- <img class="xl:w-[60%] w-[80%] " src="/images/elekro-one/titulohome.png" alt=""> -->
              <img class="xl:w-[60%] w-[80%]" src="/images/elekro-one/mobile/titulo-home-mobile.png" alt="">
            <MyButtonTwo
                href="https://www.elekrobrasil.com.br/produtos/fechadura-digital-elekro-signature/"
                target="_blank" class="!bg-black">Comprar</MyButtonTwo>

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
}

</script>

<style scoped>
.banner-title {
  @apply text-[50px] xl:text-[100px] font-bold leading-[40px] md:leading-[70px] xl:leading-[100px] lg:mt-5 mt-8;
}
.banner-text {
  @apply lg:max-w-[250px] text-xl lg:text-2xl xl:text-3xl text-start font-light mt-1;
}
.scroll-section {
  height: 100vh;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  background-color: lightblue; /* Ajuste conforme necessário */
}
@media (min-height: 750px) {
  
  .spacing-height{
    @apply max-md:mt-32
  }
}
</style>
