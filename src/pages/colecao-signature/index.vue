<script setup lang="ts">
import { texts, recursos, capacidades, praticidades } from "~/core/constants";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Scroll from "~/components/scrollFechadura.vue";
import Video from "~/components/videoFechadura.vue";
</script>

<template>
  <!-- <Body class="bg-black text-white"/> -->
  <Head>
    <Title>Coleção Signature</Title>
  </Head>
  <main class="overflow-hidden">    
    <Scroll/>

    <section class="lg:pt-24 pt-20 max-lg:sm:pt-56 z-10 lg:h-screen relative lg:overflow-hidden">
      <img 
        class="max-sm:w-full h-full sm:h-[40%] lg:hidden absolute sm:-top-[20%] -top-1/2 left-[51%] -translate-x-1/2 object-contain"
        src="/images/FechaduraDuplaHome.png" 
        alt="Fechadura" 
      />

      <div class="flex flex-col max-lg:pt-24 lg:overflow-hidden">
        <div class="max-w-[1300px] mx-auto flex-grow text-center">
          <h2 class="titleh2 mb-10">Inspirado na obra <br class="lg:hidden"> de <br class="max-lg:hidden"> Stefano Boeri, <br class="lg:hidden"> Bosco Verticale.</h2>
          <p>Milão / Itália</p>
        </div>
        <div class="lg:pt-24 pt-14">
          <img class="w-full h-auto object-cover" src="/images/elekro-one/boscoverticale.svg" alt="">
        </div>
      </div>
    </section>
    <Video/>
    <section class="lg:pt-24 pt-14 lg:pb-24 max-lg:bg-[#f8f8f8]">
      <div class="max-w-[1900px] mx-auto md:px-10 max-sm:ml-[20px] max-sm:mr-[20px] max-lg:ml-[80px] max-lg:mr-[80px]">
        <div class="max-w-[1300px] mx-auto h-full max-lg:bg-white max-lg:p-5 max-lg:rounded-xl">
          <div class="flex justify-between items-center">
            <h2 class="titleh2 max-lg:text-center mx-auto">Criptografia avançada <br class="lg:block hidden"> e segurança</h2>
            <MyButtonTwo class="lg:block hidden">+</MyButtonTwo>
          </div>
          <div class="lg:grid lg:grid-cols-2 lg:pt-24 lg:gap-72 max-w-full">
              <div >
                <figure>
                  <img class="w-[60%] object-contain max-lg:hidden" src="/images/elekro-one/fechaduraSoloCard.png" alt="">
                  <img class="w-[70%] h-full mx-auto ml-14 object-contain pt-5 pb-10 lg:hidden" src="/images/elekro-one/mobile/05Mobile_Detalhes01-Fechadura02.png" alt="">
                </figure>
              </div>
              <div class="lg:justify-self-center w-full lg:block hidden">
                <Swiper
                :modules="[Navigation, Pagination]"
                :loop="true"
                :pagination="{
                clickable: true,
                el: '.pagination-segurança',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-button' }">
                <SwiperSlide>
                <div class="lg:pb-24 pb-10 max-lg:text-center">
                  <h3 class="titleh3">WI-FI INTEGRADO</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Wi-Fi 2.4 integrado eliminando necessidade de gateway para acesso remoto.</h4>
                </div>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 ">CAMPAINHA DIGITAL</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Autorize acessos remotos em seu celular, com a tecnologia da campainha digital e tenha acesso a todas as atividades de acesso em tempo real.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="lg:pb-24 pb-10 max-lg:text-center">
                  <h3 class="titleh3">5 FORMAS DE ABERTURA</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Aplicativo + Impressão digital + Senha + Cartão Tag + Chaves</h4>
                </div>
                <div class="max-lg:text-center">
                  <h3 class="titleh3">DESIGN FUNCIONAL</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Facilmente adaptada para abrir tanto para o lado esquerdo, quanto direito com acesso facilitado via senhas numéricas, biométricas e tag.</h4>
                </div>
              </SwiperSlide>
              </Swiper>
              <div class="flex gap-6 lg:pt-24 pt-10 items-center">
               <div class="col-start-1 pagination-segurança max-xl:mr-10 h-3 flex py-4 px-3 rounded-2xl items-center w-auto bg-black justify-self-start">
               </div>
              <div>
                <button class="next-button bg-[#666664] py-2 px-3 rounded-2xl">
                  <img class="w-5" src="/images/elekro-one/arrow-right-white.png" alt="">
                </button>
              </div>
          
        </div>
              </div>
              <div class="lg:justify-self-center w-full lg:hidden block">
                <Swiper
                :modules="[Navigation, Pagination]"
                :loop="true"
                :pagination="{
                clickable: true,
                el: '.pagination-segurança-mobile',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-button' }">
                <SwiperSlide>
                <div class="lg:pb-24 pb-10 max-lg:text-center">
                  <h3 class="titleh3">WI-FI INTEGRADO</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-2">Wi-Fi 2.4 integrado eliminando necessidade de gateway para acesso remoto.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 ">CAMPAINHA DIGITAL</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-2">Autorize acessos remotos em seu celular, com a tecnologia da campainha digital e tenha acesso a todas as atividades de acesso em tempo real.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="lg:pb-24 pb-10 max-lg:text-center">
                  <h3 class="titleh3">5 FORMAS DE ABERTURA</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-2">Aplicativo + Impressão digital + Senha + Cartão Tag + Chaves</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-lg:text-center">
                  <h3 class="titleh3">DESIGN FUNCIONAL</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-2">Facilmente adaptada para abrir tanto para o lado esquerdo, quanto direito com acesso facilitado via senhas numéricas, biométricas e tag.</h4>
                </div>
              </SwiperSlide>
              </Swiper>
              </div>
            </div>
        </div>
        <div class="flex justify-between lg:pt-24 pt-5 items-center lg:hidden">
                  <div class="col-start-1 pagination-segurança-mobile max-xl:mr-10 h-3 flex py-3 px-3 rounded-2xl items-center w-auto bg-black justify-self-start">
                  </div>
                  <div>
                    <button class="next-button bg-[#666664] py-2 px-3 rounded-2xl">
                      <img class="w-4" src="/images/elekro-one/arrow-right-white.png" alt="">
                    </button>
                  </div>
              
                </div>
      </div>
    </section>
    <section class="lg:pt-24 pt-14 max-lg:bg-[#f8f8f8] lg:bg-[#F2F2F2] lg:pb-24 ">
      <div class="max-w-[1900px] mx-auto md:px-10 max-sm:ml-[20px] max-sm:mr-[20px] max-lg:ml-[80px] max-lg:mr-[80px] h-full ">
        <div class="max-w-[1300px] mx-auto h-full max-lg:bg-white  max-lg:p-5 max-lg:rounded-xl">
          <div class="flex justify-between items-center">
            <h2 class="titleh2 max-lg:text-center mx-auto">A combinação de sofisticação <br class="lg:block hidden"> com funcionalidades avançadas</h2>
            <MyButtonTwo class="lg:block hidden">+</MyButtonTwo>
          </div>
          <div class="lg:grid lg:grid-cols-2 lg:pt-24 lg:gap-72  w-full">
              <div class="lg:justify-self-center w-full lg:block hidden">
                <Swiper
                :modules="[Navigation, Pagination]"
                :loop="true"
                :pagination="{
                clickable: true,
                el: '.pagination-combinaçao',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-button' }">
                <SwiperSlide>
                <div class="lg:pb-24 pb-10 max-lg:text-center">
                  <h3 class="titleh3">CRIE SENHA COM HORÁRIO <br> DE ENTRADA E SAÍDA</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Com a função de Check-In e Check-Out você pode criar senhas com data de entrada e saída. Perfeito para Airbnb ou locações por temporada.</h4>
                </div>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 ">CADASTRE ATÉ <br> 100 USUÁRIOS</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Ideal para escritórios, você pode dar acesso a funcionários e parceiros com as senhas biométricas ou numéricas. Além disso, é possível verificar em tempo real os históricos de acessos.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="lg:pb-24 pb-10 max-lg:text-center">
                  <h3 class="titleh3">MODO PRIVACIDADE</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Acesso privado, apenas para o administrador e acesso restrito para usuários.</h4>
                </div>
                <div class="max-lg:text-center">
                  <h3 class="titleh3">LIBERE O ACESSO COM <br> A SENHA DINÂMICA</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Ideal para imobiliarias: você pode criar uma senha dinâmica de uso único de forma segura, rápida e prática.</h4>
                </div>
              </SwiperSlide>
              </Swiper>
              <div class="flex gap-6 lg:pt-24 pt-10 items-center">
               <div class="col-start-1 pagination-combinaçao max-xl:mr-10 h-3 flex py-4 px-3 rounded-2xl items-center w-auto bg-black justify-self-start">
               </div>
              <div>
                <button class="next-button bg-[#666664] py-2 px-3 rounded-2xl">
                  <img class="w-5" src="/images/elekro-one/arrow-right-white.png" alt="">
                </button>
              </div>
          
        </div>
              </div>
              <div>
                <figure>
                  <img class="w-[70%] xl:-ml-20 -mt-6  object-contain max-lg:hidden" src="/images/elekro-one/08Desktop_Detalhes02-Fechadura.png" alt="">
                  <img class="w-[70%] max-h-[350px]  object-contain pt-5 pb-10 lg:hidden" src="/images/elekro-one/mobile/06Mobile_Detalhes02-Fechadura.png" alt="">
                </figure>
              </div>
              <div class="lg:justify-self-center w-full lg:hidden block">
                <Swiper
                :modules="[Navigation, Pagination]"
                :loop="true"
                :pagination="{
                clickable: true,
                el: '.pagination-combinaçao-mobile',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-button' }">
                <SwiperSlide>
                  <div class="lg:pb-24 pb-10 max-lg:text-center">
                  <h3 class="titleh3">CRIE SENHA COM HORÁRIO <br> DE ENTRADA E SAÍDA</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Com a função de Check-In e Check-Out você pode criar senhas com data de entrada e saída. Perfeito para Airbnb ou locações por temporada.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 ">CADASTRE ATÉ 100 USUÁRIOS</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Ideal para escritórios, você pode dar acesso a funcionários e parceiros com as senhas biométricas ou numéricas. Além disso, é possível verificar em tempo real os históricos de acessos.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="lg:pb-24 pb-10 max-lg:text-center">
                  <h3 class="titleh3">MODO PRIVACIDADE</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Acesso privado, apenas para o administrador e acesso restrito para usuários.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-lg:text-center">
                  <h3 class="titleh3">LIBERE O ACESSO COM <br> A SENHA DINÂMICA</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Ideal para imobiliarias: você pode criar uma senha dinâmica de uso único de forma segura, rápida e prática.</h4>
                </div>
              </SwiperSlide>
              </Swiper>
              </div>
            </div>
        </div>
        <div class="flex justify-between lg:pt-24 pt-5 items-center lg:hidden">
                  <div class="col-start-1 pagination-combinaçao-mobile max-xl:mr-10 h-3 flex py-3 px-3 rounded-2xl items-center w-auto bg-black justify-self-start">
                  </div>
                  <div>
                    <button class="next-button bg-[#666664] py-2 px-3 rounded-2xl">
                      <img class="w-4" src="/images/elekro-one/arrow-right-white.png" alt="">
                    </button>
                  </div>
              
                </div>
      </div>
    </section>
    <section class="lg:pt-24 pt-14 lg:pb-24 max-lg:bg-[#f8f8f8] ">
      <div class="max-w-[1900px] mx-auto md:px-10 max-sm:ml-[20px] max-sm:mr-[20px] max-lg:ml-[80px] max-lg:mr-[80px] h-full">
        <div class="max-w-[1300px] mx-auto h-full max-lg:bg-white  max-lg:p-5 max-lg:rounded-xl">
          <div class="flex justify-between items-center">
            <h2 class="titleh2 max-lg:text-center mx-auto">Gerenciamento completo <br> Smart Life na Palma da Mão</h2>
            <MyButtonTwo class="lg:block hidden">+</MyButtonTwo>
          </div>
          <div class="lg:grid lg:grid-cols-2 lg:pt-24 lg:gap-72 w-full">
              <div>
                <figure>
                  <img class="w-full h-[500px] xl:-ml-36 xl:-mt-6 object-contain max-lg:hidden" src="/images/elekro-one/09Desktop_Detalhes03-Fechadura.png" alt="">
                  <img class="w-[70%] max-h-[350px] mx-auto object-contain pt-5 pb-10 lg:hidden" src="/images/elekro-one/mobile/07Mobile_Detalhes03-Fechadura.png" alt="">
                </figure>
              </div>
              <div class="lg:justify-self-center w-full lg:block hidden">
                <Swiper
                :modules="[Navigation, Pagination]"
                :loop="true"
                :pagination="{
                clickable: true,
                el: '.pagination-life',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-button' }">
                <SwiperSlide>
                <div class="lg:pb-24 pb-10 max-lg:text-center">
                  <h3 class="titleh3">CONFIGURAÇÃO DE VOLUME</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Silencie os alertas de voz da fechadura para maior conforto.</h4>
                </div>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 ">MENU EFICIENTE NA FECHADURA</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Cadastre e exclua senhas diretamente na fechadura, sem necessidade de conexão ou aplicativo.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="lg:pb-24 pb-10 max-lg:text-center">
                  <h3 class="titleh3">ALERTAS DE BATERIA</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Receba avisos de bateria fraca via aplicativo e na fechadura.</h4>
                </div>
                <div class="max-lg:text-center">
                  <h3 class="titleh3">ALERTAS DE SEGURANÇA</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Receba notificações de tentativas de abertura de fechadura quando ocorreram mais de 5 tentativas consecutivas com erro de senha.</h4>
                </div>
              </SwiperSlide>
              </Swiper>
              <div class="flex gap-6 lg:pt-24 pt-10 items-center">
               <div class="col-start-1 pagination-life max-xl:mr-10 h-3 flex py-4 px-3 rounded-2xl items-center w-auto bg-black justify-self-start">
               </div>
              <div>
                <button class="next-button bg-[#666664] py-2 px-3 rounded-2xl">
                  <img class="w-5" src="/images/elekro-one/arrow-right-white.png" alt="">
                </button>
              </div>
          
        </div>
              </div>
              <div class="lg:justify-self-center w-full lg:hidden block">
                <Swiper
                :modules="[Navigation, Pagination]"
                :loop="true"
                :pagination="{
                clickable: true,
                el: '.pagination-life-mobile',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-button' }">
                <SwiperSlide>
                  <div class="lg:pb-24 pb-10 max-lg:text-center">
                  <h3 class="titleh3">CONFIGURAÇÃO DE VOLUME</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Silencie os alertas de voz da fechadura para maior conforto.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 ">MENU EFICIENTE NA FECHADURA</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Cadastre e exclua senhas diretamente na fechadura, sem necessidade de conexão ou aplicativo.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="lg:pb-24 pb-10 max-lg:text-center">
                  <h3 class="titleh3">ALERTAS DE BATERIA</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Receba avisos de bateria fraca via aplicativo e na fechadura.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-lg:text-center">
                  <h3 class="titleh3">ALERTAS DE SEGURANÇA</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Receba notificações de tentativas de abertura de fechadura quando ocorreram mais de 5 tentativas consecutivas com erro de senha.</h4>
                </div>
              </SwiperSlide>
              </Swiper>
              </div>
            </div>
        </div>
        <div class="flex justify-between lg:pt-24 pt-5 items-center lg:hidden">
                  <div class="col-start-1 pagination-life-mobile max-xl:mr-10 h-3 flex py-3 px-3 rounded-2xl items-center w-auto bg-black justify-self-start">
                  </div>
                  <div>
                    <button class="next-button bg-[#666664] py-2 px-3 rounded-2xl">
                      <img class="w-4" src="/images/elekro-one/arrow-right-white.png" alt="">
                    </button>
                  </div>
              
                </div>
      </div>
    </section>
    <section class="lg:pt-24 pt-14 max-lg:bg-[#f8f8f8] lg:bg-[#F2F2F2] lg:pb-24 pb-14">
      <div class="max-w-[1900px] mx-auto md:px-10 max-sm:ml-[20px] max-sm:mr-[20px] max-lg:ml-[80px] max-lg:mr-[80px] h-full ">
        <div class="max-w-[1300px] mx-auto h-full max-lg:bg-white  max-lg:p-5 max-lg:rounded-xl">
          <div class="flex justify-between items-center">
            <h2 class="titleh2 max-lg:text-center mx-auto">Design e tecnologia, <br> aliados a segurança</h2>
            <MyButtonTwo class="lg:block hidden">+</MyButtonTwo>
          </div>
          <div class="lg:grid lg:grid-cols-2 lg:pt-24 lg:gap-72 w-full">
            
              <div class="lg:justify-self-center w-full lg:block hidden">
                <Swiper
                :modules="[Navigation, Pagination]"
                :loop="true"
                :pagination="{
                clickable: true,
                el: '.pagination-design',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-button' }">
                <SwiperSlide>
                <div class="lg:pb-24 pb-10 max-lg:text-center">
                  <h3 class="titleh3">CONECTE-SE</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Utilize todo o potencial do aplicativo Smart Life para conectar a outros dispositivos inteligentes, compatíveis com a Smart Life, como sistemas de segurança, câmeras e iluminação, permitindo automação e cenários personalizados.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="lg:pb-24 pb-10 max-lg:text-center">
                  <h3 class="titleh3">MÉTODOS ALTERNATIVOS DE ABERTURA</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Em casos de falta de bateria, abra a porta utilizando a chave mestra ou energize-a via entrada USB C localizada na parte inferior.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-lg:text-center">
                  <h3 class="titleh3">HISTÓRICO DE ACESSOS</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">IEle mantém um registro detalhado de todas as atividades de destravamento de fechadura, permitindo que os usuários visualizem o histórico de acesso para monitoramento e segurança.</h4>
                </div>
              </SwiperSlide>
              </Swiper>
              <div class="flex gap-6 lg:pt-24 pt-10 items-center">
               <div class="col-start-1 pagination-design max-xl:mr-10 h-3 flex py-4 px-3 rounded-2xl items-center w-auto bg-black justify-self-start">
               </div>
              <div>
                <button class="next-button bg-[#666664] py-2 px-3 rounded-2xl">
                  <img class="w-5" src="/images/elekro-one/arrow-right-white.png" alt="">
                </button>
              </div>
          
        </div>
              </div>
              <div>
                <figure>
                  <img class="w-full xl:-ml-20 -mt-4 object-contain max-lg:hidden" src="/images/elekro-one/10Desktop_Detalhes04-Fechadura.png" alt="">
                  <img class="w-[70%] max-h-[350px] mx-auto object-contain pt-5 pb-10 lg:hidden" src="/images/elekro-one/mobile/08Mobile_Detalhes04-Fechadura.png" alt="">
                </figure>
              </div>
              <div class="lg:justify-self-center w-full lg:hidden block">
                <Swiper
                :modules="[Navigation, Pagination]"
                :loop="true"
                :pagination="{
                clickable: true,
                el: '.pagination-design-mobile',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-button' }">
                <SwiperSlide>
                  <div class="lg:pb-24 pb-10 max-lg:text-center">
                  <h3 class="titleh3">CONECTE-SE</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Utilize todo o potencial do aplicativo Smart Life para conectar a outros dispositivos inteligentes, compatíveis com a Smart Life, como sistemas de segurança, câmeras e iluminação, permitindo automação e cenários personalizados.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="lg:pb-24 pb-10 max-lg:text-center">
                  <h3 class="titleh3">MÉTODOS ALTERNATIVOS DE ABERTURA</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Em casos de falta de bateria, abra a porta utilizando a chave mestra ou energize-a via entrada USB C localizada na parte inferior.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-lg:text-center">
                  <h3 class="titleh3">HISTÓRICO DE ACESSOS</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">IEle mantém um registro detalhado de todas as atividades de destravamento de fechadura, permitindo que os usuários visualizem o histórico de acesso para monitoramento e segurança.</h4>
                </div>
              </SwiperSlide>
              </Swiper>
              </div>
            </div>
        </div>
        <div class="flex justify-between lg:pt-24 pt-5 items-center lg:hidden">
                  <div class="col-start-1 pagination-design-mobile max-xl:mr-10 h-3 flex py-3 px-3 rounded-2xl items-center w-auto bg-black justify-self-start">
                  </div>
                  <div>
                    <button class="next-button bg-[#666664] py-2 px-3 rounded-2xl">
                      <img class="w-4" src="/images/elekro-one/arrow-right-white.png" alt="">
                    </button>
                  </div>
              
                </div>
      </div>
    </section>
    <section class="lg:pt-24 pt-14 lg:pb-24">
        <div class="max-w-[1900px] mx-auto md:px-10 max-sm:ml-[20px] max-sm:mr-[20px] max-lg:ml-[80px] max-lg:mr-[80px] h-full ">
          <div
            class="max-w-[1300px] mx-auto h-full text-center"
          >
          <h2 class="titleh2 text-center">Projetada para as condições <br> climáticas do Brasil</h2>
            <div
              class="grid md:grid-cols-4 grid-cols-2 border-b border-[#e4e3e3] pb-10 pt-24"
            >
              <div
                class="flex flex-col justify-between max-md:border-b max-md:border-[#e4e3e3] max-md:pb-10" 
              >
                <h3 class="titleh4 ">
                  Tipo de <br> porta
                </h3>
                <p>Madeira</p>
              </div>
              <div
                class="flex flex-col justify-between max-md:border-b max-md:border-[#e4e3e3] max-md:pb-10"
              >
                <h3 class="titleh4 ">
                  Idioma
                </h3>
                <p>Português</p>
              </div>
              <div class="flex flex-col justify-between max-md:pt-10">
                <h3 class="titleh4 ">
                  Material
                </h3>
                <p>
                  Liga de <br> alumínio
                </p>
              </div>
              <div class="flex flex-col gap-3 max-md:pt-10">
                <h4 class="titleh4 ">
                  Número de <br> administradores
                </h4>
                <p>9</p>
              </div>
            </div>
            <div
              class="grid md:grid-cols-4 grid-cols-2 border-b border-[#e4e3e3] pb-10 pt-10"
            >
              <div
                class="flex flex-col gap-3 max-md:border-b max-md:border-[#e4e3e3] max-md:pb-10 pt-10"
              >
                <h4 class="titleh4 ">Espessura da <br> porta</h4>
                <p class="text-sm">30mm a 85mm</p>
              </div>
              <div
                class="flex flex-col gap-3 max-md:border-b max-md:border-[#e4e3e3] max-md:pb-10 pt-10"
              >
                <h4 class="titleh4 ">
                  Aplicativo
                </h4>
                <p class="text-sm">
                  Smart Life <br> <span class="text-xs">*Não é compatível com Amazon Alexa <br> e Google Assistente</span>
                </p>
              </div>
              <div class="flex flex-col gap-3 pt-10">
                <h4 class="titleh4 ">
                  Cor
                </h4>
                <p class="text-sm">
                  Cinza Titânio
                </p>
              </div>
              <div class="flex flex-col gap-3 pt-10">
                <h4 class="titleh4 ">Número de <br> usuários</h4>
                <p class="text-sm">100</p>
              </div>
            </div>
            <div class="grid md:grid-cols-4 grid-cols-2 border-b border-[#e4e3e3] pb-10 pt-10">
              <div
                class="flex flex-col gap-3 max-md:border-b max-md:border-[#e4e3e3] max-md:pb-10 pt-10"
              >
                <h4 class="titleh4 ">Dimensões > Máquina <br> da fechadura</h4>
                <p class="text-sm">
                  195mm x 220mm <br> 5050
                </p>
              </div>
              <div
                class="flex flex-col gap-3 max-md:border-b max-md:border-[#e4e3e3] max-md:pb-10 pt-10"
              >
                <h4 class="titleh4 ">Processador</h4>
                <p class="text-sm">
                  Alto desempenho
                </p>
              </div>
              <div class="flex flex-col gap-3 pt-10">
                <h4 class="titleh4 ">
                  Wi-Fi
                </h4>
                <p class="text-sm">Wi-Fi 2.4</p>
              </div>
              <div class="flex flex-col gap-3 pt-10">
                <h4 class="titleh4 ">
                  Temperatura de <br> trabalho
                </h4>
                <p class="text-sm">25℃ a 70℃</p>
              </div>
            </div>
            <div class="grid md:grid-cols-4 grid-cols-2 border-b border-[#e4e3e3] pb-10 pt-10">
              <div
                class="flex flex-col gap-3 max-md:border-b max-md:border-[#e4e3e3] max-md:pb-10 pt-10"
              >
                <h4 class="titleh4 ">Dimensões da <br> fechadura</h4>
                <p class="text-sm">
                  283mm x 154mm <br> x 70mm
                </p>
              </div>
              <div
                class="flex flex-col gap-3 max-md:border-b max-md:border-[#e4e3e3] max-md:pb-10 pt-10"
              >
                <h4 class="titleh4 ">Fontes de <br> alimentação</h4>
                <p class="text-sm">
                  4 Pilhas AAA <br> 6V(1.5V*4)
                </p>
              </div>
              <div class="flex flex-col gap-3 pt-10">
                <h4 class="titleh4 ">
                  Portas USB
                </h4>
                <p class="text-sm">Tipo C</p>
              </div>
              <div class="flex flex-col gap-3 pt-10">
                <h4 class="titleh4 ">
                  Sistema de <br> Proteção
                </h4>
                <p class="text-sm">IP56, resistente <br> à corrosão, água <br> e poeira</p>
              </div>
            </div>
            <div class="lg:pt-24 pt-14 max-lg:pb-14">
              <MyButtonTwo>Comprar</MyButtonTwo>
            </div>
          </div>
        </div>
      
    </section>

  </main>
</template>

<style scoped>
.banner-title {
  @apply text-start text-[30px] md:text-[60px] xl:text-[80px] font-bold leading-[40px] md:leading-[70px] lg:leading-[100px] lg:mt-5 mt-8;
}
.banner-text {
  @apply lg:max-w-[250px] text-xl lg:text-2xl xl:text-5xl text-start font-light lg:mt-0 mt-2;
}

.titleh2 {
  @apply md:text-5xl font-semibold text-3xl;
}
.titleh3 {
  @apply font-semibold  text-xl max-md:!leading-tight;
}
.titleh4 {
  @apply text-base;
}
/* .linksB {
  @apply px-4 py-2 cursor-pointer my-3 text-base md:text-xl rounded-md bg-black text-white;
} */
</style>

<!-- Por algum motivo o css do swiper estava renderizando depois do css da pagina, tive que estilizar globalmente para funcionar -->
<style>
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  @apply w-auto;
}
.swiper-pagination-bullet {
  @apply bg-[#666664] w-7 h-1 rounded-3xl opacity-60;
}
.swiper-pagination-bullet-active {
  @apply bg-white border-none opacity-100;
}
</style>
