<script setup lang="ts">
useHead({
    link:[
        { rel: "canonical", href: "https://elekro.com.br/colecao-signature" }
    ]
})
// import { texts, recursos, capacidades, praticidades } from "~/core/constants";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Scroll from "~/components/scrollFechadura.vue";
import Popup from "~/components/popup.vue";

</script>

<template>
  <!-- <Body class="bg-black text-white"/> -->
  <Head>
    <Title>Coleção Signature</Title>
    <Meta name="description" content="Tecnologia que protege, inovação que conecta"/>
    <Meta property="og:description" content="Tecnologia que protege, inovação que conecta"/>
    <Meta property="og:title" content=""/>
    <Meta property="og:image" content="/images/elekro-logo.jpeg"/>
    <Meta property="og:url" content="https://elekro.com.br/"/>
    <Meta name="twitter:title" content="Elekro"/>
    <Meta name="twitter:description" content="Tecnologia que protege, inovação que conecta"/>
    <Meta name="twitter:image" content="/images/elekro-logo.jpeg"/>
    <Meta name="twitter:card" content="summary_large_image"/>
  </Head>
  <main class="overflow-hidden">    
    <!-- <Scroll/> -->
    <!-- <BannerGenericBanner image="/images/banner/bg-signature-hight.png">
      <div class="h-full flex items-end">
        <div class="w-full">
          <div class="mx-auto lg:mx-0 grid grid-cols-3 gap-x-3 w-full max-w-[200px] mb-6">
            <div class="bg-[#3f413c] col-span-1 rounded-2xl border border-white"></div>
            <div class="col-span-2 text-xl">Na cor cinza Titânio</div>
          </div>
          <h1 class="text-2xl lg:text-3xl w-full text-center lg:text-start">Com campainha<br/>digital, para desbloqueio<br/>remoto de onde estiver.</h1>
        </div>
      </div>
    </BannerGenericBanner> -->

    <section class="py-0 z-10 lg:h-screen relative lg:overflow-hidden">
      <img 
        class="max-sm:w-[90%] sm:h-[40%] hidden absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
        src="/images/fechadura-dupla.png" 
        alt="Fechadura" 
      />

      <div class="flex flex-col pt-14 lg:pt-24 lg:overflow-hidden h-screen">
        <div class="w-full max-w-[800px] mx-auto flex flex-col justify-center items-center text-center min-h-[50%]">
          <!-- <h2 class="titleh2 mb-10 w-full">Inspirado na obra <br class="lg:hidden"> de <br class="max-lg:hidden"> Stefano Boeri, <br class="lg:hidden"> Bosco Verticale.</h2> -->
          <h2 class="titleh2 mb-10 w-full px-2 md:px-0">Inspirado na harmonia entre natureza e arquitetura dos edifícios contemporâneos</h2>
          <p class="w-full">Milão / Itália</p>
          <MyButtonTwo class="inline-block max-w-[150px] mt-2" href="https://www.elekrobrasil.com.br/produtos/fechadura-eletronica-digital-biometria-senha-campainha-wi-fi/" target="_blank">Comprar</MyButtonTwo>
        </div>
        <div class="pt-0 h-[100%]">
          <figure class="h-full block">
            <img 
            class="w-full h-full object-cover object-center" 
            src="/images/elekro-one/Bosco-verticale.png" 
            alt="predio bosco verticale"
            />
          </figure>
        </div>
      </div>
    </section>
    <div class="hidden md:block">
      <VideoFechadura/>
    </div>
    <VideoMobile/>

    <!-- slider 1 -->
    <section class="lg:pt-24 pt-14 lg:pb-24 max-lg:bg-[#f8f8f8] z-10 relative">
      <div class="max-w-[1900px] mx-auto md:px-10 xl:px-60 max-sm:ml-[20px] max-sm:mr-[20px] max-lg:ml-[80px] max-lg:mr-[80px]">
        <div class="max-w-[800px] mx-auto h-full max-lg:bg-white max-lg:p-5 max-lg:rounded-xl">
          <div class="flex justify-between items-center">
            <h2 class="titleh2 max-lg:text-center">Criptografia avançada <br class="lg:block hidden"> e segurança</h2>
            <Popup
              titulo-p="Criptografia avançada e segurança" 
              titulo="WI-FI INTEGRADO"
              texto="Wi-Fi 2.4 integrado eliminando necessidade de gateway para acesso remoto."
              titulo2="CAMPAINHA DIGITAL"
              texto2="Autorize acessos remotos em seu celular, com a tecnologia da campainha digital e tenha acesso a todas as atividades de acesso em tempo real."
              titulo3="5 FORMAS DE ABERTURA"
              texto3="Aplicativo + Impressão digital + Senha + Cartão Tag + Chaves"
              titulo4="DESIGN FUNCIONAL"
              texto4="Facilmente adaptada para abrir tanto para o lado esquerdo, quanto direito com acesso facilitado via senhas numéricas, biométricas e tag."
            />
          </div>
          <div class="lg:grid lg:grid-cols-2 lg:pt-24 max-w-full ">
              <div >
                <figure class="relative 
                after:lg:absolute after:top-[430px] after:left-[180px] after:w-[100px] after:h-full after:max-h-[80px] after:bg-no-repeat after:bg-contain after:bg-[url('/images/elekro-one/cinzaTitanio.png')]
                
                before:lg:absolute before:top-[415px] before:left-[310px] before:w-[50px] before:h-full before:max-h-[80px] before:bg-no-repeat before:bg-contain before:bg-[url('/images/elekro-one/07Desktop_Detalhes01-Tag.png')]">
                  <!-- <img class="max-h-[500px] object-contain max-lg:hidden" src="/images/elekro-one/fechaduraSoloCard.png" alt="">
                  <img class="w-full max-h-[350px] object-contain pt-5 pb-10 lg:hidden" src="/images/elekro-one/mobile/mobile-detalhes-fechadura.png" alt=""> -->
                  <img class="max-h-[500px] object-contain max-lg:hidden" src="/images/signature/Fotos0002.png" alt="">
                  <img class="w-full max-h-[350px] relative translate-x-[12%] object-contain pt-5 pb-4 lg:hidden" src="/images/signature/Fotos0002.png" alt="">
                </figure>
                <!-- <div class="flex lg:hidden flex-wrap items-center justify-center gap-3 mb-10">
                  <figure class="block">
                    <img src="/images/elekro-one/cinzaTitanio.png" alt=""/>
                  </figure>
                  <figure class="block">
                    <img src="/images/elekro-one/07Desktop_Detalhes01-Tag.png" alt=""/>
                  </figure>
                </div> -->
              </div>
              <div class="lg:self-center lg:justify-self-end lg:w-[80%] lg:block hidden">
                <Swiper
                :modules="[Navigation, Pagination, Autoplay]"
                :loop="true"
                :autoplay="{
                  delay: 2000,
                }"
                :pagination="{
                clickable: true,
                el: '.pagination-segurança',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-button' }">
                <SwiperSlide>
                <div class="lg:pb-20 pb-10 max-lg:text-center">
                  <h3 class="titleh3 uppercase">Wi-Fi integrado</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Wi-Fi 2.4 integrado eliminando necessidade de gateway para acesso remoto.</h4>
                </div>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 uppercase">Campainha digital</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Autorize acessos remotos em seu celular, com a tecnologia da campainha digital e tenha acesso a todas as atividades de acesso em tempo real.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="lg:pb-20 pb-10 max-lg:text-center">
                  <h3 class="titleh3 uppercase">5 formas de abertura</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Aplicativo + Impressão digital + Senha + Cartão Tag + Chaves</h4>
                </div>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 uppercase">Design funcional</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Facilmente adaptada para abrir tanto para o lado esquerdo, quanto direito com acesso facilitado via senhas numéricas, biométricas e tag.</h4>
                </div>
              </SwiperSlide>
            </Swiper>
            <div class="flex gap-6 lg:pt-32 pt-10 items-center">
              <!-- dotted desktop -->
              <div class="col-start-1 pagination-segurança max-xl:mr-10 h-3 flex py-4 px-3 items-center w-auto bg-black justify-self-start rounded-full">
              </div>

              <div>
                <button class="next-button bg-[#666664] w-10 h-8 flex justify-center items-center rounded-lg">
                  <img class="w-5" src="/images/elekro-one/arrow-right-white.png" alt="">
                </button>
              </div>
        
              </div>
              </div>
              <div class="lg:justify-self-center w-full lg:hidden block">
                <Swiper
                :modules="[Navigation, Pagination, Autoplay]"
                :loop="true"
                :autoplay="{
                  delay: 2000,
                }"
                :pagination="{
                clickable: true,
                el: '.pagination-segurança-mobile',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-button' }">
                <SwiperSlide>
                <div class="lg:pb-20 pb-10 max-lg:text-center">
                  <h3 class="titleh3 uppercase">Wi-Fi integrado</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-2">Wi-Fi 2.4 integrado eliminando necessidade de gateway para acesso remoto.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 uppercase">Campainha digital</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-2">Autorize acessos remotos em seu celular, com a tecnologia da campainha digital e tenha acesso a todas as atividades de acesso em tempo real.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="lg:pb-20 pb-10 max-lg:text-center">
                  <h3 class="titleh3 uppercase">5 formas de abertura</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-2">Aplicativo + Impressão digital + Senha + Cartão Tag + Chaves</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 uppercase">Design funcional</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-2">Facilmente adaptada para abrir tanto para o lado esquerdo, quanto direito com acesso facilitado via senhas numéricas, biométricas e tag.</h4>
                </div>
              </SwiperSlide>
              </Swiper>
              </div>
            </div>
        </div>
        <div class="flex justify-center lg:pt-24 pt-5 items-center lg:hidden relative">
            <div class="col-start-1 pagination-segurança-mobile h-3 flex py-3 px-3 items-center w-auto bg-black justify-self-start rounded-full">
            </div>
            <div class="absolute right-0">
              <button class="next-button bg-[#666664] w-10 h-6 flex justify-center items-center rounded-lg">
                <img class="w-4" src="/images/elekro-one/arrow-right-white.png" alt="">
              </button>
            </div>
        </div>
      </div>
    </section>
    <!-- fim slider 1 -->

    <!-- slider 2 -->
    <section class="lg:pt-24 pt-14 bg-[#f8f8f8] lg:pb-24 z-10 relative">
      <div class="max-w-[1900px] mx-auto md:px-10 xl:px-60 max-sm:ml-[20px] max-sm:mr-[20px] max-lg:ml-[80px] max-lg:mr-[80px] h-full ">
        <div class="max-w-[800px] mx-auto h-full max-lg:bg-white  max-lg:p-5 max-lg:rounded-xl">
          <div class="flex justify-between items-center">
            <h2 class="titleh2 max-lg:text-center">A combinação de sofisticação <br class="lg:block hidden"> com funcionalidades avançadas</h2>
            <Popup
            titulo-p="A combinação de sofisticação com funcionalidades avançadas" 
            titulo="CRIE SENHA COM HORÁRIO DE ENTRADA E SAÍDA"
            texto="Com a função de Check-In e Check-Out você pode criar senhas com data de entrada e saída. Perfeito para Airbnb ou locações por temporada."
            titulo2="CADASTRE ATÉ 100 USUÁRIOS"
            texto2="Ideal para escritórios, você pode dar acesso a funcionários e parceiros com as senhas biométricas ou numéricas. Além disso, é possível verificar em tempo real os históricos de acessos."
            titulo3="MODO PRIVACIDADE"
            texto3="Acesso privado, apenas para o administrador e acesso restrito para usuários."
            titulo4="LIBERE O ACESSO COM A SENHA DINÂMICA"
            texto4="Ideal para imobiliarias: você pode criar uma senha dinâmica de uso único de forma segura, rápida e prática."
            />
          </div>
          <div class="lg:grid lg:grid-cols-2 lg:pt-24 w-full">
              <div class="lg:self-center w-full lg:block hidden">
                <Swiper
                :modules="[Navigation, Pagination, Autoplay]"
                :loop="true"
                :autoplay="{
                  delay: 2000,
                }"
                :pagination="{
                clickable: true,
                el: '.pagination-combinaçao',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-button-combinaçao' }">
                <SwiperSlide>
                <div class="lg:pb-20 pb-10 max-lg:text-center">
                  <h3 class="titleh3 uppercase">Crie senha com horário <br> de entrada e saída</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Com a função de Check-In e Check-Out você pode criar senhas com data de entrada e saída. Perfeito para Airbnb ou locações por temporada.</h4>
                </div>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 uppercase">Cadastre até <br> 200 usuários</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Ideal para escritórios, você pode dar acesso a funcionários e parceiros com as senhas biométricas ou numéricas. Além disso, é possível verificar em tempo real os históricos de acessos.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="lg:pb-20 pb-10 max-lg:text-center">
                  <h3 class="titleh3 uppercase">Modo privacidade</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Acesso privado, apenas para o administrador e acesso restrito para usuários.</h4>
                </div>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 uppercase">Libere o acesso <br> a senha dinâmica</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Ideal para imobiliarias: você pode criar uma senha dinâmica de uso único de forma segura, rápida e prática.</h4>
                </div>
              </SwiperSlide>
              </Swiper>
              <div class="flex gap-6 lg:pt-20 pt-10 items-center">
               <div class="col-start-1 pagination-combinaçao max-xl:mr-10 h-3 flex py-4 px-3 items-center w-auto bg-black justify-self-start rounded-full">
               </div>
              <div>
                <button class="next-button-combinaçao bg-[#666664] w-10 h-8 flex justify-center items-center rounded-lg">
                  <img class="w-5" src="/images/elekro-one/arrow-right-white.png" alt="">
                </button>
              </div>
          
        </div>
              </div>
              <div class="lg:justify-self-end">
                <figure>
                  <!-- <img class="max-h-[500px] object-contain max-lg:hidden" src="/images/elekro-one/08Desktop_Detalhes02-Fechadura.png" alt="">
                  <img class="w-full max-h-[350px] -ml-12  object-contain pt-5 pb-10 lg:hidden" src="/images/elekro-one/mobile/06Mobile_Detalhes02-Fechadura.png" alt=""> -->
                  <img class="max-h-[500px] object-contain max-lg:hidden" src="/images/signature/Fotos0004.png" alt="">
                  <img class="w-full max-h-[350px] -ml-12  object-contain pt-5 pb-10 lg:hidden" src="/images/signature/Fotos0004.png" alt="">
                </figure>
              </div>
              <div class="lg:justify-self-center w-full lg:hidden block">
                <Swiper
                :modules="[Navigation, Pagination, Autoplay]"
                :loop="true"
                :autoplay="{
                  delay: 2000,
                }"
                :pagination="{
                clickable: true,
                el: '.pagination-combinaçao-mobile',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-button-combinaçao' }">
                <SwiperSlide>
                  <div class="lg:pb-20 pb-10 max-lg:text-center">
                  <h3 class="titleh3 uppercase">Crie senha com horário <br> de entrada e saída</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Com a função de Check-In e Check-Out você pode criar senhas com data de entrada e saída. Perfeito para Airbnb ou locações por temporada.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 uppercase">Cadastre até <br> 200 usuários</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Ideal para escritórios, você pode dar acesso a funcionários e parceiros com as senhas biométricas ou numéricas. Além disso, é possível verificar em tempo real os históricos de acessos.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="lg:pb-20 pb-10 max-lg:text-center">
                  <h3 class="titleh3 uppercase">Modo privacidade</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Acesso privado, apenas para o administrador e acesso restrito para usuários.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 uppercase">Libere o acesso <br> a senha dinâmica</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Ideal para imobiliarias: você pode criar uma senha dinâmica de uso único de forma segura, rápida e prática.</h4>
                </div>
              </SwiperSlide>
              </Swiper>
              </div>
            </div>
        </div>
        <div class="flex justify-center lg:pt-24 pt-5 items-center lg:hidden relative">
          <div class="col-start-1 pagination-combinaçao-mobile h-3 flex py-3 px-3 items-center w-auto bg-black justify-self-start rounded-full">
          </div>
          <div class="absolute right-0">
            <button class="next-button-combinaçao bg-[#666664] w-10 h-6 flex justify-center items-center rounded-lg">
              <img class="w-4" src="/images/elekro-one/arrow-right-white.png" alt="">
            </button>
          </div>
      
        </div>
      </div>
    </section>
    <!-- fim slider 2 -->

    <!-- slider 3 -->
    <section class="lg:pt-24 pt-14 lg:pb-24 max-lg:bg-[#f8f8f8] z-10 relative">
      <div class="max-w-[1900px] mx-auto md:px-10 xl:px-60 max-sm:ml-[20px] max-sm:mr-[20px] max-lg:ml-[80px] max-lg:mr-[80px] h-full">
        <div class="max-w-[800px] mx-auto h-full max-lg:bg-white  max-lg:p-5 max-lg:rounded-xl">
          <div class="flex justify-between items-center">
            <h2 class="titleh2 max-lg:text-center">Configuração descomplicada: <br class="lg:block hidden">segurança inteligente em minutos</h2>
            <Popup
              titulo-p="Gerenciamento completo Smart Life na palma da mão"
              titulo="CONFIGURAÇÃO DE VOLUME"
              texto="Silencie os alertas de voz da fechadura para maior conforto."
              titulo2="MENU EFICIENTE NA FECHADURA"
              texto2="Cadastre e exclua senhas diretamente na fechadura, sem necessidade de conexão ou aplicativo."
              titulo3="ALERTAS DE BATERIA"
              texto3="Receba avisos de bateria fraca via aplicativo e na fechadura."
              titulo4="ALERTAS DE SEGURANÇA"
              texto4="Receba notificações de tentativas de abertura de fechadura quando ocorreram mais de 5 tentativas consecutivas com erro de senha."
            />
          </div>
          <div class="lg:grid lg:grid-cols-2 lg:pt-24 w-full">
              <div>
                <figure>
                  <!-- <img class="max-h-[500px] object-contain max-lg:hidden" src="/images/elekro-one/fechadura-detalhes.png" alt="">
                  <img class="max-h-[350px] w-full -ml-12 object-contain pt-5 pb-10 lg:hidden" src="/images/elekro-one/fechadura-detalhes.png" alt=""> -->
                  <img class="max-h-[500px] object-contain max-lg:hidden" src="/images/signature/Fotos0005.png" alt="">
                  <img class="max-h-[350px] w-full -ml-12 object-contain pt-5 pb-10 lg:hidden" src="/images/signature/Fotos0005.png" alt="">
                </figure>
              </div>
              <div class="lg:self-center lg:justify-self-end lg:w-[80%]  lg:block hidden">
                <Swiper
                :modules="[Navigation, Pagination, Autoplay]"
                :loop="true"
                :autoplay="{
                  delay: 2000,
                }"
                :pagination="{
                clickable: true,
                el: '.pagination-life',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-life' }">
                <SwiperSlide>
                <div class="lg:pb-20 pb-10 max-lg:text-center">
                  <h3 class="titleh3 uppercase">Configuração de volume</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Silencie os alertas de voz da fechadura para maior conforto.</h4>
                </div>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 uppercase">Menu eficiente na fechadura</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Cadastre e exclua senhas diretamente na fechadura, sem necessidade de conexão ou aplicativo.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="lg:pb-20 pb-10 max-lg:text-center">
                  <h3 class="titleh3 uppercase">Alertas de bateria</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Receba avisos de bateria fraca via aplicativo e na fechadura.</h4>
                </div>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 uppercase">Alertas de segurança</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Receba notificações de tentativas de abertura de fechadura quando ocorreram mais de 5 tentativas consecutivas com erro de senha.</h4>
                </div>
              </SwiperSlide>
              </Swiper>
              <div class="flex gap-6 lg:pt-40 pt-10 items-center">
               <div class="col-start-1 pagination-life h-3 flex py-4 px-3 items-center w-auto bg-black justify-self-start rounded-full">
               </div>
              <div>
                <button class="next-life bg-[#666664] w-10 h-8 flex justify-center items-center rounded-lg">
                  <img class="w-5" src="/images/elekro-one/arrow-right-white.png" alt="">
                </button>
              </div>
          
        </div>
              </div>
              <div class="lg:justify-self-center w-full lg:hidden block">
                <Swiper
                :modules="[Navigation, Pagination, Autoplay]"
                :loop="true"
                :autoplay="{
                  delay: 2000,
                }"
                :pagination="{
                clickable: true,
                el: '.pagination-life-mobile',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-life-mobile' }">
                <SwiperSlide>
                  <div class="lg:pb-20 pb-10 max-lg:text-center">
                  <h3 class="titleh3 uppercase">Configuração de volume</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Silencie os alertas de voz da fechadura para maior conforto.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 uppercase">Menu eficiente na fechadura</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Cadastre e exclua senhas diretamente na fechadura, sem necessidade de conexão ou aplicativo.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="lg:pb-20 pb-10 max-lg:text-center">
                  <h3 class="titleh3 uppercase">Alertas de bateria</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Receba avisos de bateria fraca via aplicativo e na fechadura.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 uppercase">Alertas de segurança</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Receba notificações de tentativas de abertura de fechadura quando ocorreram mais de 5 tentativas consecutivas com erro de senha.</h4>
                </div>
              </SwiperSlide>
              </Swiper>
              </div>
            </div>
        </div>
        <div class="flex justify-center lg:pt-24 pt-5 items-center lg:hidden relative">
          <div class="col-start-1 pagination-life-mobile h-3 flex py-3 px-3 items-center w-auto bg-black justify-self-start rounded-full">
          </div>
          <div class="absolute right-0">
            <button class="next-life-mobile bg-[#666664] w-10 h-6 flex justify-center items-center rounded-lg">
              <img class="w-4" src="/images/elekro-one/arrow-right-white.png" alt="">
            </button>
          </div>
      
        </div>
      </div>
    </section>
    <!-- fim slider 3 -->

    <!-- slider 4 -->
    <section class="lg:pt-24 pt-14 bg-[#f8f8f8] lg:pb-24 pb-14 z-10 relative">
      <div class="max-w-[1900px] mx-auto md:px-10 xl:px-60 max-sm:ml-[20px] max-sm:mr-[20px] max-lg:ml-[80px] max-lg:mr-[80px] h-full ">
        <div class="max-w-[800px] mx-auto h-full max-lg:bg-white  max-lg:p-5 max-lg:rounded-xl">
          <div class="flex max-lg:justify-center justify-between items-center ">
            <h2 class="titleh2 max-lg:text-center">Design e tecnologia, <br> aliados a segurança</h2>
            <Popup
            titulo-p="Design e tecnologia, aliados a segurança" 
            titulo="CONECTE-SE"
            texto="Utilize todo o potencial do aplicativo Smart Life para conectar a outros dispositivos inteligentes, compatíveis com a Smart Life, como sistemas de segurança, câmeras e iluminação, permitindo automação e cenários personalizados."
            titulo2="MÉTODOS ALTERNATIVOS DE ABERTURA"
            texto2="Em casos de falta de bateria, abra a porta utilizando a chave mestra ou energize-a via entrada USB C localizada na parte inferior."
            titulo3="HISTÓRICO DE ACESSOS"
            texto3="O aplicativo mantém um registro detalhado de todas as atividades de destravamento de fechadura, permitindo que os usuários visualizem o histórico de acesso para monitoramento e segurança."
            />
          </div>
          <div class="lg:grid lg:grid-cols-2 lg:pt-24 w-full">
            
              <div class="lg:self-center w-full lg:block hidden">
                <Swiper
                :modules="[Navigation, Pagination, Autoplay]"
                :loop="true"
                :autoplay="{
                  delay: 2000,
                }"
                :pagination="{
                clickable: true,
                el: '.pagination-design',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-design' }">
                <SwiperSlide>
                <div class="lg:pb-20 pb-10 max-lg:text-center">
                  <h3 class="titleh3 uppercase">Conecte-se</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Utilize todo o potencial do aplicativo Smart Life para conectar a outros dispositivos inteligentes, compatíveis com a Smart Life, como sistemas de segurança, câmeras e iluminação, permitindo automação e cenários personalizados.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="lg:pb-20 pb-10 max-lg:text-center">
                  <h3 class="titleh3 uppercase">Métodos alternativos de abertura</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Em casos de falta de bateria, abra a porta utilizando a chave mestra ou energize-a via entrada USB C localizada na parte inferior.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 uppercase">Histórico de acessos</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">O aplicativo mantém um registro detalhado de todas as atividades de destravamento de fechadura, permitindo que os usuários visualizem o histórico de acesso para monitoramento e segurança.</h4>
                </div>
              </SwiperSlide>
              </Swiper>
              <div class="flex gap-6 lg:pt-24 pt-10 items-center">
               <div class="col-start-1 pagination-design max-xl:mr-10 h-3 flex py-4 px-3 items-center w-auto bg-black justify-self-start rounded-full">
               </div>
              <div>
                <button class="next-design bg-[#666664] w-10 h-8 flex justify-center items-center rounded-lg">
                  <img class="w-5" src="/images/elekro-one/arrow-right-white.png" alt="">
                </button>
              </div>
          
        </div>
              </div>
              <div class="justify-self-end">
                <figure>
                  <img class="max-h-[500px] object-contain max-lg:hidden" src="/images/signature/Fotos0003.png" alt="">
                  <img class="w-[70%] max-h-[350px] mx-auto object-contain pt-5 pb-10 lg:hidden" src="/images/signature/Fotos0003.png" alt="">
                </figure>
              </div>
              <div class="lg:justify-self-center w-full lg:hidden block">
                <Swiper
                :modules="[Navigation, Pagination, Autoplay]"
                :loop="true"
                :autoplay="{
                  delay: 2000,
                }"
                :pagination="{
                clickable: true,
                el: '.pagination-design-mobile',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-design-mobile' }">
                <SwiperSlide>
                  <div class="lg:pb-20 pb-10 max-lg:text-center">
                  <h3 class="titleh3 uppercase">Conecte-se</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Utilize todo o potencial do aplicativo Smart Life para conectar a outros dispositivos inteligentes, compatíveis com a Smart Life, como sistemas de segurança, câmeras e iluminação, permitindo automação e cenários personalizados.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="lg:pb-20 pb-10 max-lg:text-center">
                  <h3 class="titleh3 uppercase">Métodos alternativos de abertura</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">Em casos de falta de bateria, abra a porta utilizando a chave mestra ou energize-a via entrada USB C localizada na parte inferior.</h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="max-lg:text-center">
                  <h3 class="titleh3 uppercase">Histórico de acessos</h3>
                  <h4 class="titleh4 max-w-96 max-lg:mx-auto mt-3">O aplicativo mantém um registro detalhado de todas as atividades de destravamento de fechadura, permitindo que os usuários visualizem o histórico de acesso para monitoramento e segurança.</h4>
                </div>
              </SwiperSlide>
              </Swiper>
              </div>
            </div>
        </div>
        <div class="flex justify-center lg:pt-24 pt-5 items-center lg:hidden relative">
          <div class="col-start-1 pagination-design-mobile h-3 flex py-3 px-3  items-center w-auto bg-black justify-self-start rounded-full">
          </div>
          <div class="absolute right-0">
            <button class="next-design-mobile bg-[#666664] w-10 h-6 flex justify-center items-center rounded-lg">
              <img class="w-4" src="/images/elekro-one/arrow-right-white.png" alt="">
            </button>
          </div>
      
        </div>
      </div>
    </section>
    <!-- fim slider 4 -->

    
    <section class="lg:pt-24 pt-14 lg:pb-24 z-10 relative">
        <div class="max-w-[1900px] mx-auto md:px-10 xl:px-60 max-sm:ml-[20px] max-sm:mr-[20px] max-lg:ml-[80px] max-lg:mr-[80px] h-full ">
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
                <p class="text-sm">200</p>
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
                <p class="text-sm">-25℃ a 70℃</p>
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
                  4 Pilhas AA <br> 6V(1.5V*4)
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
                <p class="text-sm">IP66, resistente <br> à corrosão, água <br> e poeira</p>
              </div>
            </div>
            <div class="lg:pt-24 pt-14 max-lg:pb-14">
              <MyButtonTwo href="https://www.elekrobrasil.com.br/produtos/fechadura-eletronica-digital-biometria-senha-campainha-wi-fi/" target="_blank">Comprar</MyButtonTwo>
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
  @apply text-lg lg:text-base;
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
