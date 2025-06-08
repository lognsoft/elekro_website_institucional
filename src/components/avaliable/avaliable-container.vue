<script setup lang="ts">
  import { type IAvaliableCard } from '~/core/types';
  import { type Swiper as SwiperClass } from "swiper/types"
  const swiperRef = ref<SwiperClass | null>(null)

  const avaliables:IAvaliableCard[] = [
  {
    "name": "Vinícius Oliveira",
    "avaliable": [
      "Produto excelente e a qualidade do serviço prestado ainda melhor. Tive todo o suporte durante o período de pós-compra/instalação. Recomendo muito a experiência com a Elekro."
    ],
    "stars": 5
  },
  {
    "name": "Evelyn Werdine",
    "avaliable": [
      "Ótima qualidade e design sofisticado. A facilidade do app é um diferencial."
    ],
    "stars": 5
  },
  {
    "name": "Rony Neri",
    "avaliable": [
      "Instalar a fechadura digital da Elekro foi uma excelente escolha! A fechadura tecnológica e segura combina biometria, chaves eletrônicas e conectividade Wi-Fi com um design moderno que fica muito bonito na porta.",
      "Aproveito para parabenizar a equipe de Londrina-PR, profissionais extremamente atenciosos e competentes desde as primeiras interações até a instalação rápida e cuidadosa.",
      "Recomendo muito para quem busca tecnologia e praticidade no dia a dia — e odeia ficar carregando chaves de casa de um lado para o outro!"
    ],
    "stars": 5
  },
  {
    "name": "Scau Zhang",
    "avaliable": [
      "Esta fechadura é incrível, perfeita para mim e minha família. Acabamos de nos mudar para o Brasil e a equipe da Elekro nos deu todo o suporte que precisávamos para manter nossa casa tecnológica e segura. Todo o processo foi muito rápido, desde a compra."
    ],
    "stars": 5
  },
  {
    "name": "Laura Lima",
    "avaliable": [
      "Atendimento impecável, melhor fechadura do mercado. Não tenho o que reclamar, desde a pré-venda até o pós-venda. Sempre muito atenciosos e prestativos com qualquer dúvida."
    ],
    "stars": 5
  },
  {
    "name": "Marilyn Sandyla",
    "avaliable": [
      "Excelente atendimento e serviço de alta qualidade! Desde o primeiro contato, fui muito bem atendida pela equipe, que demonstrou profissionalismo e dedicação. O ambiente é agradável, os produtos são de primeira qualidade e a experiência foi impecável. Recomendo a todos."
    ],
    "stars": 5
  }
]

  function goPrev(): void{
    swiperRef.value && swiperRef.value.slidePrev()
  }

  function goNext(): void{
    swiperRef.value && swiperRef.value.slideNext()
  }
</script>

<template>
  <div>
    <div class="navigate">
      <div class="navigate-container">
        <button class="button-navigate" @click="goPrev">
          <Icon name="ep:arrow-left-bold"/>
        </button>
        <button class="button-navigate" @click="goNext">
          <Icon name="ep:arrow-right-bold"/>
        </button>
      </div>
    </div>
    <Swiper
    :breakpoints="{
      0:{
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1200:{
        slidesPerView: 3
      }
    }"
    :space-between="10"
    :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
    :autoplay="{
      delay: 6600
    }"
    :loop="true"
    :speed="2000"
    @swiper="(swiper) => swiperRef = swiper"
  >
    <SwiperSlide v-for="{avaliable, name, stars}, index in avaliables" :key="`avaliable-${index}`">
      <AvaliableCard :stars="stars" :name="name" :avaliable="avaliable"/>
    </SwiperSlide>
  </Swiper>
</div>
</template>

<style scoped>
.navigate{
  @apply
  hidden
  md:flex
  items-center
  justify-end
  mb-5
}

.navigate-container{
  @apply
  flex
  gap-1
  items-center
}

.button-navigate{
  @apply
  bg-[#666664]
  text-white
  flex
  items-center
  justify-center
  w-10
  h-8
  text-[25px]
}
</style>