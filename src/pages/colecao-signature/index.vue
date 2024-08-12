<script setup lang="ts">
import { texts, recursos, capacidades, praticidades } from "~/core/constants";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Scroll from "~/components/scrollFechadura.vue";
</script>

<template>
  <!-- <Body class="bg-black text-white"/> -->
  <Head>
    <Title>Coleção Signature</Title>
  </Head>
  <main class="overflow-hidden">    
    <Scroll/>

    <section class="pt-28 max-lg:sm:pt-56 z-10 relative">
      <img class="max-sm:w-full h-full sm:h-[40%] lg:hidden absolute sm:-top-[20%] -top-1/2 left-[51%] -translate-x-1/2 object-contain" src="/images/FechaduraDuplaHome.png" alt="Fechadura" />

     <div class="max-lg:pt-28">
      <div class="max-w-[1300px] mx-auto h-full text-center" >
        <h2 class="titleh2">Inspirado na obra <br class="lg:hidden"> de <br class="max-lg:hidden"> Stefano Boeri, <br class="lg:hidden"> Bosco Verticale.</h2>
        <p>Milão / Itália</p>
      </div>
      <div class="pt-28">
        <img class="w-full h-auto object-cover" src="/images/elekro-one/boscoverticale.svg" alt="">
        <video class="relative w-full h-auto" preload="metadata" controlslist="nodownload noplaybackrate foobar" controls>
          <source src="/video/fechadura-elekro.mp4" type="video/mp4">
        </video>
      </div>
     </div>
    </section>
    <section class="lg:pt-52 pt-28 lg:pb-64">
      <div class="max-w-[1900px] mx-auto md:px-10 max-md:pl-[40px] max-md:pr-[20px] h-full ">
        <div class="max-w-[1300px] mx-auto h-full">
          <div class="lg:grid lg:grid-cols-2">
            <div class="items-center max-lg:flex flex-col max-lg:text-center">
              <h2 class="titleh2">
                O Início de uma nova geração de fechaduras inteligentes
              </h2>
              <MyButtonTwo class="lg:!mb-40 flex items-center gap-2 inline-flex">
                <span>Assista ao vídeo</span>
                <span
                  ><img
                    class="w-[25px] h-full"
                    src="/images/elekro-one/iconplay.png"
                    alt=""
                /></span>
              </MyButtonTwo>
              <div
                class="justify-self-end relative pt-10 pb-10 max-lg:block hidden"
              >
                <figure>
                  <img
                    class="max-lg:block hidden"
                    src="/images/elekro-one/FechaduraGeracao.png"
                    alt="Fechadura"
                  />
                </figure>
                <div class="absolute top-7 left-1/2 -translate-x-1/2">
                  <img
                    src="/images/elekro-one/mobile/07Mobile_SeloFechadura.png"
                    alt="Selo de autenticação"
                  />
                </div>
              </div>

              <div class="lg:border-t-2 pt-10 max-w-96">
                <h3 class="lg:max-w-[19rem] titleh3">
                  A COMBINAÇÃO DE SOFISTICAÇÃO COM FUNCIONALIDADES AVANÇADAS
                </h3>
                <h4 class="lg:max-w-[19rem] titleh4 mt-5">
                  Getway integrado, acesso biométrico, gestão de acesso em tempo
                  real, remoto e muito mais.
                </h4>
              </div>
            </div>
            <div class="lg:block hidden justify-self-end relative h-full">
              <figure class="h-full">
                <img
                  class="h-full"
                  src="/images/elekro-one/FechaduraGeracao.png"
                  alt="Fechadura"
                />
              </figure>
              <div class="absolute -bottom-14 left-1/2 -translate-x-1/2">
                <img
                  src="/images/elekro-one/SeloFechadura.png"
                  alt="Selo de autenticação"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-10 lg:border-t-2">
      <div
        class="max-w-[1900px] mx-auto md:px-10 max-sm:ml-[40px] max-sm:mr-[20px] max-lg:ml-[80px] max-lg:mr-[40px] h-full"
      >
        <div
          class="max-w-[1300px] mx-auto h-full max-md:pt-10 max-lg:border-t-2 pt-10"
        >
          <h2 class="titleh2">
            Explore a <br />
            Elekro Signature
          </h2>
          <h3 class="lg:max-w-96 titleh3">
            PROJETADA PARA AS CONDIÇÕES CLIMÁTICAS DO BRASIL
          </h3>
          <h4 class="titleh4 mt-5">
            Construída em liga de alumínio e com proteção IP56 (resistente à
            corrosão, à <br />
            água* e poeira)
            <span class="text-[12px]"
              >*Proteção limitada. Protegida de jatos de água de alta pressão de
              qualquer direção.</span
            >
          </h4>
        </div>
      </div>
      <div class="w-full pt-10">
        <div class="grid md:grid-cols-2">
          <div class="relative">
            <figure>
              <img
                class="max-h-[600px] object-cover w-full"
                src="/images/elekro-one/DesignFuncional.png"
                alt="Fechadura em porta de Madeira de fundo"
              />
            </figure>
            <div
              class="absolute lg:bottom-[10%] bottom-10 left-1/2 -translate-x-1/2 max-lg:text-center max-md:w-full"
            >
              <h2 class="text-[#aaaaaa] mb-4">COM DESIGN FUNCIONAL</h2>
              <h3
                class="w-[340px] max-sm:w-[320px] text-white text-md max-sm:text-sm mx-auto"
              >
                Construída com um design funcional, facilmente adaptada para
                abrir tanto para o lado esquerdo, quanto direito.
              </h3>
            </div>
          </div>
          <div class="relative">
            <figure>
              <img
                class="max-h-[600px] object-cover w-full"
                src="/images/elekro-one/Ecossistemas.png"
                alt="Sala com luminarias de fundo"
              />
            </figure>
            <div
              class="absolute lg:bottom-[10%] bottom-10 left-1/2 -translate-x-1/2 max-lg:text-center max-md:w-full"
            >
              <h2 class="text-[#aaaaaa] mb-4">CRIE ECOSISTEMAS DO SEU JEITO</h2>
              <h3
                class="w-[340px] max-sm:w-[320px] text-white text-md max-sm:text-sm mx-auto"
              >
                Ao abrir sua porta, luzes podem se acender, temperatura de
                ambiente serem ajustadas e muito mais, tudo através do
                aplicativo.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="max-w-[1900px] mx-auto md:px-10 max-sm:ml-[40px] max-sm:mr-[20px] max-lg:ml-[80px] max-lg:mr-[40px] h-full pt-10">
        <div class="max-w-[1300px] mx-auto h-full">
          <div class="grid lg:grid-cols-2">
            <div class="">
              <h2 class="titleh2">
                Diversas funções e <br />
                criptografia <br />
                segura
              </h2>
              <h3 class="titleh3">
                Criptografia com <br />
                Chip integrado de proteção
              </h3>
            </div>
            <div class="lg:justify-self-end max-lg:pt-10">
              <div class="mb-5">
                <h3 class="titleh3">MODOS DE ACESSO</h3>
                <h4 class="max-w-96 titleh4 mt-5">
                  Acesso Privado, apenas para o administrador e acesso livre, para
                  que qualquer pessoa acesse.
                </h4>
              </div>
              <div class="border-t-2">
                <h3 class="titleh3 mt-5">CONFIGURAÇÕES DE VOLUME</h3>
                <h4 class="max-w-96 titleh4 mt-5">
                  Controle de volume e modo silencioso, que não emite sons ao
                  utilizar a fechadura.
                </h4>
              </div>
            </div>
          </div>
          <div class="grid lg:grid-cols-2 lg:grid-rows-2 relative md:pt-[100px]">
            <div class="lg:row-span-2 lg:col-end-3 lg:col-start-1">
              <figure class="lg:block hidden">
                <img
                  class="object-cover w-[60%]"
                  src="/images/elekro-one/FechaduraBateria.png"
                  alt=""
                />
              </figure>
            </div>
            <div class="lg:absolute bottom-14 lg:bottom-24 right-0 pt-5">
              <MyButtonTwo class="!cursor-default my-3 inline-block">Bateria inteligente</MyButtonTwo>
              <h3 class="titleh3">ALERTAS DE BATERIA E VIOLAMENTO</h3>
              <h4 class="lg:max-w-96 titleh4 mt-5">
                Adicionando o getway da Elekro, receba aviso de bateria fraca,
                violamento ou tentativa indevida de abertura da fechadura.
              </h4>
            </div>
          </div>
          <div class="grid lg:grid-cols-2 mt-10">
            <div class="lg:block hidden">
              <h4 class="lg:max-w-96 titleh4">
                Caso não veja o alarme, você ainda pode abrir a porta utilizando a
                <span class="font-semibold"
                  >chave mestra ou então utilizar a entrada USB
                </span>
                localizada na parte de baixo para energizar a fechadura.
              </h4>
            </div>
            <div
              class="flex lg:justify-self-end lg:max-w-96 justify-between items-center w-full"
            >
              <div>
                <img
                  src="/images/elekro-one/IconeVolume.png"
                  alt="Icone de volume"
                />
                <h4 class="font-semibold mt-1">
                  Gerenciamento <br />
                  de volume de voz
                </h4>
              </div>
              <div>
                <img
                  src="/images/elekro-one/IconeBateria.png"
                  alt="Icone de bateria"
                />
                <h4 class="font-semibold mt-1">
                  Status da bateria <br />
                  em tempo real
                </h4>
              </div>
            </div>
          </div>
          <div>
            <div class="pt-10">
              <figure class="max-lg:block hidden">
                <img
                  class="object-cover w-full"
                  src="/images/elekro-one/mobile/13Mobile_FechaduraBateria.png"
                  alt="Parte de baixo da fechadura mostrando entrada de carregador USB e chave de segurança"
                />
              </figure>
            </div>
            <div class="max-lg:block hidden pt-10">
              <h4 class="lg:max-w-96 titleh4">
                Caso não veja o alarme, você ainda pode abrir a porta utilizando a
                <span class="font-semibold"
                  >chave mestra ou então utilizar a entrada USB
                </span>
                localizada na parte de baixo para energizar a fechadura.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="lg:pt-52 pt-28 relative z-10">
      <Swiper
        :modules="[Autoplay, Pagination]"
        :autoplay="{ delay: 3500 }"
        :pagination="{ clickable: true, el: '.pagination-aside' }"
      >
        <SwiperSlide>
          <div class="min-w-full relative">
            <figure>
              <img
                class="w-full max-h-[600px] object-cover"
                src="/images/elekro-one/BannerEmpresas.png"
                alt="Banner escritorio com pessoas"
              />
            </figure>
            <div
              class="absolute top-1/2 -translate-y-1/2 md:left-[15.5%] left-10 z-10"
            >
              <h2
                class="text-[20px] md:text-[50px] lg:text-[60px] xl:text-[80px] w-auto text-white text leading-tight"
              >
                Funções para <br />
                empresa, com <br />
                gestão completa <br />
                de usuários.
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="min-w-full relative">
            <figure>
              <img
                class="w-full max-h-[600px] object-cover"
                src="/images/elekro-one/BannerImobiliarias.png"
                alt="Banner de casas ao fundo"
              />
            </figure>
            <div
              class="absolute top-1/2 -translate-y-1/2 md:left-[15.5%] left-10 z-10 scale-100"
            >
              <h2
                class="text-[20px] md:text-[50px] lg:text-[60px] xl:text-[80px] w-auto text-white leading-tight"
              >
                Funções de <br />
                senha dinâmica <br />
                para imobiliárias.
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="min-w-full relative">
            <figure>
              <img
                class="w-full max-h-[600px] object-cover"
                src="/images/elekro-one/BannerAirbnb.png"
                alt="Banner familia olhando uma casa de fundo"
              />
            </figure>
            <div
              class="absolute top-1/2 -translate-y-1/2 md:left-[15.5%] left-10 z-10"
            >
              <h2
                class="text-[20px] md:text-[50px] lg:text-[60px] xl:text-[80px] w-auto text-white leading-tight"
              >
                Funções Check in <br />
                e Check-out para <br />
                Airbnb e locações.
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div
        class="pagination-aside flex md:flex-col md:gap-2 md:py-3 py-2 !px-1 rounded-md items-center absolute md:!top-1/2 lg:!-translate-y-1/2 z-10 !right-[5%] !left-auto w-auto md:h-16 h-0 bg-black"
      ></div>
    </section>
    <section>
      <div class="max-w-[1900px] mx-auto md:px-10 max-sm:ml-[40px] max-sm:mr-[20px] max-lg:ml-[80px] max-lg:mr-[40px] h-full pt-10">
        <div class="max-w-[1300px] mx-auto h-full">
          <div class="grid lg:grid-cols-2 lg:pb-52 pb-28">
            <div class="flex flex-col">
              <h3 class="titleh3">
                CADASTRE ATÉ 100 <br />
                BIOMETRIAS E ATÉ 100 <br />
                SENHAS NUMÉRICAS <br />
                DIFERENTES
              </h3>
              <h4 class="max-w-96 titleh4 mt-5">
                Ideal para empresas, você pode dar acesso a diversos funcionários
                e parceiros com as senhas biométricos ou numéricas. Além disso, é
                possível gerenciar todo o acesso por meio do aplicativo com: 
                histórico permissões e áreas restritas, inclusão e exclusão em
                tempo real e muito mais.
              </h4>
            </div>
            <div class="flex flex-col lg:justify-self-end mt-5">
              <h3 class="titleh3">
                CRIE SENHA COM HORÁRIO <br />
                DE ENTRADA E SAÍDA
              </h3>
              <h4 class="max-w-96 titleh4 mt-5">
                Com a função de Check-in e Check-out você pode criar senhas com data de
                entrada e saída. Perfeito para Airbnb ou locações por temporada.
              </h4>
              <h3 class="titleh3 mt-5">LIBERE O ACESSO COM A SENHA DINÂMICA</h3>
              <h4 class="max-w-96 titleh4 mt-5">
                Ideal para imobiliárias, você pode criar uma senha dinâmica, de
                uso único. Garanta o acesso de forma segura, rápida e prática.
              </h4>
            </div>
          </div>
          <div class="border-t-2 lg:pt-52 pt-28">
            <div>
              <h2 class="titleh2 text-center">
                Integre com Amazon Alexa <br class="lg:block hidden" />
                e Google Assistant
              </h2>
              <figure>
                <img
                  src="/images/elekro-one/AmazonGoogle.png"
                  alt="Foto de uma Amazon Alexa e Google Assistant"
                />
              </figure>
            </div>
            <div class="grid lg:grid-cols-2 mt-10">
              <div class="flex flex-col">
                <h3 class="titleh3">
                  DESTRAVE E VERIFIQUE O <br class="lg:block hidden" />
                  STATUS DA FECHADURA <br class="lg:block hidden" />
                  COM SIMPLES COMANDOS <br class="lg:block hidden" />
                  DE VOZ
                </h3>
                <h4 class="lg:max-w-96 titleh4 mt-5">
                  Função disponível com o nosso sistema de travamento ativado por
                  voz.
                </h4>
              </div>
              <div class="flex flex-col lg:justify-self-end">
                <h4 class="lg:max-w-96 titleh4">
                  No ecossistema Smart Life, nossa fechaduras inteligentes
                  conectadas via nosso getway Bluetooth e Wi-fi podem facilmente
                  se integrar com a Amazon Alexa e Google Assistant.
                </h4>
                <h4 class="lg:max-w-96 titleh4 mt-5">
                  Graças às rotinas da Alexa, os alto-falantes inteligentes da
                  Amazon podem responder às vinculações de cenários.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="lg:pt-52 pt-28 md:pb-[550px] pb-52 z-10 relative">
      <div class="w-full">
        <div class="relative">
          <figure>
            <img
              class="w-full object-cover hidden lg:block"
              src="/images/elekro-one/BannerSmartLife.png"
              alt="Banner homem sorrindo"
            />
            <img
              class="w-full object-cover block lg:hidden"
              src="/images/elekro-one/mobile/18Mobile_BannerSmartLife.png"
              alt="Banner homem sorrindo"
            />
          </figure>
          <div
            class="absolute md:left-[15.5%] left-10 top-1/2 -translate-y-1/2 z-10"
          >
            <img
              class="lg:block hidden"
              src="/images/elekro-one/IconeSmartLife.png"
              alt="Icone de um casa"
            />
            <img
              class="lg:hidden block"
              src="/images/elekro-one/mobile/06Mobile_IconeSmartLife.png"
              alt="Icone de um casa"
            />
            <h2
              class="text-[20px] md:text-[50px] lg:text-[60px] xl:text-[80px] w-auto text-white"
            >
              Gerenciamento completo <br />
              Smart Life na palma da mão
            </h2>
          </div>
        </div>
      </div>
      <div
        class="w-full relative after:content-[''] after:absolute after:h-full after:w-1/2 after:left-0 after:top-0 lg:after:bg-black"
      >
        <div class="max-w-[1300px] mx-auto h-full z-10 relative">
          <div class="lg:block hidden">
            <Swiper
              :modules="[Navigation, Pagination]"
              :pagination="{
                clickable: true,
                el: '.pagination-desktop',
                type: 'bullets',
              }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-button' }"
            >
              <SwiperSlide>
                <div class="grid md:grid-cols-2">
                  <div
                    class="text-white max-lg:bg-black py-20 max-md:py-5 max-2xl:px-3"
                  >
                    <h3 class="titleh3">INTEGRAÇÃO</h3>
                    <h4 class="2xl:max-w-96 titleh4 mt-5">
                      O Smart Life pode ser integrado a outros dispositivos
                      domésticos inteligentes, como sistemas de segurança,
                      câmeras de vigilancia e dispositivos de iluminação. Isso
                      permite automatizar tarefas e criar cenários
                      personalizados.
                    </h4>
                  </div>
                  <div
                    class="lg:justify-self-end py-20 max-md:py-5 max-2xl:px-3"
                  >
                    <h3 class="titleh3">CONTROLE REMOTO</h3>
                    <h4 class="2xl:max-w-96 titleh4 mt-5">
                      Adicionando o getway da Elekro, com o Smart Life, os
                      usuários podem controlar suas fechaduras inteligentes
                      remotamente por meio do aplicativo em seus dispositivos
                      móveis. Isso permite destrancar portas de qualquer lugar,
                      oferecendo conveniência e segurança adicional.
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="grid md:grid-cols-2">
                  <div
                    class="text-white max-md:bg-black py-20 max-md:py-5 max-2xl:px-3"
                  >
                    <h3 class="titleh3">NOTIFICAÇÕES EM TEMPO REAL</h3>
                    <h4 class="2xl:max-w-96 titleh4 mt-5">
                      O Smart Life pode enviar notificações em tempo real para o
                      celular do usuário sempre que ocorrer uma atividade na
                      fechadura inteligente, como tentativas de acesso não
                      autorizado ou a entrada de um convidado.
                    </h4>
                  </div>
                  <div
                    class="lg:justify-self-end py-20 max-md:py-5 max-2xl:px-3"
                  >
                    <h3 class="titleh3">HISTÓRICO DE ACESSOS</h3>
                    <h4 class="2xl:max-w-96 titleh4 mt-5">
                      Ele mantém um registro detalhado de todas as atividades de
                      destravamento de fechadura, permitindo que os usuários
                      visualizem o histórico de acesso para monitoramento e
                      segurança.
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="grid md:grid-cols-2">
                  <div
                    class="text-white max-md:bg-black py-20 max-md:py-5 max-2xl:px-3"
                  >
                    <h3 class="titleh3">CONTROLE POR VOZ</h3>
                    <h4 class="2xl:max-w-96 titleh4 mt-5">
                      Integrado com assistentes de voz como Amazon Alexa e
                      Google Assistant, o Smart Life permite qur os usuários
                      controlem suas fechaduras inteligentes usando comandos de
                      voz simples.
                    </h4>
                  </div>
                  <div
                    class="lg:justify-self-end py-20 max-md:py-5 max-2xl:px-3"
                  >
                    <h3 class="titleh3">ALERTAS DE BATERIA</h3>
                    <h4 class="2xl:max-w-96 titleh4 mt-5">
                      O sistema Smart Life pode enviar alertas quando a bateria
                      da fechadura inteligente estiver fraca, garantindo que os
                      usuários saibam quando é necessário trocar a bateria para
                      evitar interrupções no funcionamento.
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="grid md:grid-cols-2">
                  <div
                    class="text-white max-md:bg-black py-20 max-md:py-5 max-2xl:px-3"
                  >
                    <h3 class="titleh3">GERENCIAMENTO DE USUÁRIOS</h3>
                    <h4 class="2xl:max-w-96 titleh4 mt-5">
                      Adicione ou remova usuários autorizados rapidamente. Tenha
                      total gerenciamento das permisões de acesso e controle
                      facilmente o acesso de visitantes em cenários residenciais,
                      sociais e comerciais.
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="lg:hidden relative h-full">
            <Swiper
              :modules="[Navigation, Pagination]"
              :pagination="{ clickable: true, el: '.pagination-mobile' }"
              :navigation="{ prevEl: '.prev-button', nextEl: '.next-button' }"
            >
              <SwiperSlide>
                <div
                  class="text-white bg-black h-[344px] py-10 max-md:pl-[40px] max-lg:pr-[20px] max-lg:pl-[130px]"
                >
                  <h3 class="titleh3">INTEGRAÇÃO</h3>
                  <h4 class="titleh4 mt-5">
                    O Smart Life pode ser integrado a outros dispositivos
                    domésticos inteligentes, como sistemas de segurança, câmeras
                    de vigilancia e dispositivos de iluminação. Isso permite
                    automatizar tarefas e criar cenários personalizados.
                  </h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="py-10 max-md:pl-[40px] bg-white max-md:pr-[20px] max-lg:pl-[130px]"
                >
                  <h3 class="titleh3">CONTROLE REMOTO</h3>
                  <h4 class="titleh4 mt-5">
                    Adicionando o getway da Elekro, com o Smart Life, os
                    usuários podem controlar suas fechaduras inteligentes
                    remotamente por meio do aplicativo em seus dispositivos
                    móveis. Isso permite destrancar portas de qualquer lugar,
                    oferecendo conveniência e segurança adicional.
                  </h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="text-white bg-black py-10 h-[344px] max-md:pl-[40px] max-lg:pr-[20px] max-lg:pl-[130px]"
                >
                  <h3 class="titleh3">NOTIFICAÇÕES EM TEMPO REAL</h3>
                  <h4 class="titleh4 mt-5">
                    O Smart Life pode enviar notificações em tempo real para o
                    celular do usuário sempre que ocorrer uma atividade na
                    fechadura inteligente, como tentativas de acesso não
                    autorizado ou a entrada de um convidado.
                  </h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="py-10 max-md:pl-[40px] max-lg:pr-[20px] max-lg:pl-[130px]"
                >
                  <h3 class="titleh3">HISTÓRICO DE ACESSOS</h3>
                  <h4 class="titleh4 mt-5">
                    Ele mantém um registro detalhado de todas as atividades de
                    destravamento de fechadura, permitindo que os usuários
                    visualizem o histórico de acesso para monitoramento e
                    segurança.
                  </h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="text-white bg-black py-14 max-md:pl-[40px] max-lg:pr-[20px] h-[344px] max-lg:pl-[130px]"
                >
                  <h3 class="titleh3">CONTROLE POR VOZ</h3>
                  <h4 class="titleh4 mt-5">
                    Integrado com assistentes de voz como Amazon Alexa e Google
                    Assistant, o Smart Life permite qur os usuários controlem
                    suas fechaduras inteligentes usando comandos de voz simples.
                  </h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="py-10 max-md:pl-[40px] max-lg:pr-[20px] max-lg:pl-[130px]"
                >
                  <h3 class="titleh3">ALERTAS DE BATERIA</h3>
                  <h4 class="titleh4 mt-5">
                    O sistema Smart Life pode enviar alertas quando a bateria da
                    fechadura inteligente estiver fraca, garantindo que os
                    usuários saibam quando é necessário trocar a bateria para
                    evitar interrupções no funcionamento.
                  </h4>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  class="text-white bg-black py-10 h-[344px] max-md:pl-[40px] max-lg:pr-[20px] max-lg:pl-[130px]"
                >
                  <h3 class="titleh3">GERENCIAMENTO DE USUÁRIOS</h3>
                  <h4 class="titleh4 mt-5">
                    Adicione ou remova usuários autorizados rapidamente. Tenha
                    total gerenciamento das permissões de acesso e controle
                    facilmente o acesso de visitantes em cenários residenciais,
                    sociais e comerciais.
                  </h4>
                </div>
              </SwiperSlide>
              <div class="flex relative">
                <div
                  class="pagination-mobile absolute !bottom-7 z-10 bg-black lg:!px-2 !py-1 max-md:!left-10 max-lg:!left-[8.5rem] flex rounded-[4px"
                ></div>
                <div
                  class="flex items-center gap-2 absolute bottom-7 right-3 px-3 z-10"
                >
                  <button class="prev-button">
                    <img
                      class="object-contain w-5"
                      src="/images/elekro-one/arrow-left.png"
                      alt="Seta cinza para esquerda"
                    />
                  </button>
                  <button class="next-button">
                    <img
                      class="w-5"
                      src="/images/elekro-one/arrow-right.png"
                      alt="Seta cinza para direita"
                    />
                  </button>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>

      <div
        class="max-w-[1300px] mx-auto h-full max-lg:hidden block relative mt-10"
      >
        <div
          class="grid lg:grid-cols-2 items-center lg:justify-center justify-between"
        >
          <div class="flex items-center gap-5">
            <div class="flex items-center">
              <button class="prev-button">
                <img
                  class="object-contain w-10"
                  src="/images/elekro-one/arrow-left.png"
                  alt="Seta cinza para esquerda"
                />
              </button>
              <button class="next-button">
                <img
                  class="w-10"
                  src="/images/elekro-one/arrow-right.png"
                  alt="Seta cinza para direita"
                />
              </button>
            </div>
            <div>
              <h3 class="titleh3 mt-0">
                Passe para o lado e confira todas <br />
                as funções inteligentes.
              </h3>
            </div>
          </div>
          <div
            class="col-start-2 pagination-desktop max-xl:mr-10 h-3 flex py-3 px-2 rounded-md items-center w-auto bg-black justify-self-end"
          ></div>
        </div>
      </div>
    </section>
    <section class="relative z-10">
      <MyButtonTwo
        class="absolute xl:-top-40 xl:right-[28%] max-sm:-top-20 -top-32 !cursor-pointer max-sm:right-[5%] max-md:!text-[10px] max-md!py-1 max-md:!px-1.5 max-md:!py-1 right-[10%] flex items-center gap-2 z-40"
      >
        <span>Analisar de perto</span>
        <span
          ><img
            class="w-[25px] h-full"
            src="/images/elekro-one/icom+.png"
            alt=""
        /></span>
      </MyButtonTwo>
      <div class="bg-black text-white relative">
        <figure
          class="absolute left-1/2 -translate-x-1/2 -translate-y-3/4 max-xl:w-full max-md:max-w-[270px]"
        >
          <img
            class="md:w-full"
            src="/images/elekro-one/FechaduraFicha2.png"
            alt="Fechadura deitada na pagina"
          />
          <!-- <img
            class="w-full md:hidden"
            src="/images/elekro-one/mobile/19Mobile_FechaduraFicha.png"
            alt="Fechadura deitada na pagina"
          /> -->
        </figure>
        <div class="max-w-[1900px] mx-auto md:px-10 px-1 h-full">
          <div
            class="max-w-[1300px] mx-auto h-full text-center md:pt-[220px] pt-24 md:pb-[100px] pb-5"
          >
            <div
              class="grid md:grid-cols-4 grid-cols-2 border-b border-[#626262] pb-5"
            >
              <div
                class="flex flex-col gap-3 max-md:border-b max-md:border-[#626262] max-md:pb-5" 
              >
                <h3 class="titleh4 text-[#aaaaaa]">
                  Tamanho do <br />
                  produto
                </h3>
                <p>275*65mm</p>
              </div>
              <div
                class="flex flex-col gap-3 max-md:border-b max-md:border-[#626262] max-md:pb-5 "
              >
                <h3 class="titleh4 text-[#aaaaaa]">
                  Fontes de <br />
                  alimentação
                </h3>
                <p>4 Pilhas AAA</p>
              </div>
              <div class="flex flex-col gap-3 max-md:pt-5">
                <h3 class="titleh4 text-[#aaaaaa]">
                  Capacidade de <br />
                  tags
                </h3>
                <p>
                  Até 100 registros <br />
                  de tag
                </p>
              </div>
              <div class="flex flex-col gap-3 max-md:pt-5">
                <h4 class="titleh4 text-[#aaaaaa]">
                  Velocidade de <br />
                  reconhecimento
                </h4>
                <p>< 0.35S</p>
              </div>
            </div>
            <div
              class="grid md:grid-cols-4 grid-cols-2 border-b border-[#626262] pb-5"
            >
              <div
                class="flex flex-col gap-3 max-md:border-b max-md:border-[#626262] max-md:pb-5 pt-5"
              >
                <h4 class="titleh4 text-[#aaaaaa]">Tensão de alimentação</h4>
                <p class="text-sm">4.5V-6V</p>
              </div>
              <div
                class="flex flex-col gap-3 max-md:border-b max-md:border-[#626262] max-md:pb-5 pt-5"
              >
                <h4 class="titleh4 text-[#aaaaaa]">
                  Capacidade de <br />
                  senhas
                </h4>
                <p class="text-sm">
                  Até 100 registros <br />
                  de senha
                </p>
              </div>
              <div class="flex flex-col gap-3 pt-5">
                <h4 class="titleh4 text-[#aaaaaa]">
                  Capacidade de <br />
                  biometrias
                </h4>
                <p class="text-sm">
                  Até 100 registros <br />
                  de digitais
                </p>
              </div>
              <div class="flex flex-col gap-3 pt-5">
                <h4 class="titleh4 text-[#aaaaaa]">Espessura da porta</h4>
                <p class="text-sm">30-120mm</p>
              </div>
            </div>
            <div class="grid md:grid-cols-4 grid-cols-2 pb-5">
              <div
                class="flex flex-col gap-3 max-md:border-b max-md:border-[#626262] max-md:pb-5 pt-5"
              >
                <h4 class="titleh4 text-[#aaaaaa]">Tipo de porta</h4>
                <p class="text-sm">
                  Porta Antirroubo <br />
                  Porta de Madeira <br />
                  Porta de Aço
                </p>
              </div>
              <div
                class="flex flex-col gap-3 max-md:border-b max-md:border-[#626262] max-md:pb-5 pt-5"
              >
                <h4 class="titleh4 text-[#aaaaaa]">Tipos de trinco</h4>
                <p class="text-sm">
                  Trinco Único <br />
                  60-70mm ou <br />
                  Trinco Duplo <br />
                  5050/4585/6085
                </p>
              </div>
              <div class="flex flex-col gap-3 pt-5">
                <h4 class="titleh4 text-[#aaaaaa]">
                  Temperatura <br />
                  operacional
                </h4>
                <p class="text-sm">-20°C-70°C</p>
              </div>
              <div class="flex flex-col gap-3 pt-5">
                <h4 class="titleh4 text-[#aaaaaa]">
                  Taxa de <br />
                  rejeição
                </h4>
                <p class="text-sm">< 0.01%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="lg:pt-52 pt-28 lg:pb-52 pb-28">
      <div class="max-w-[1900px] mx-auto md:px-10 max-sm:ml-[40px] max-sm:mr-[20px] h-full ">
        <div class="max-w-[1300px] mx-auto h-full">
          <h2 class="banner-title">
            Venha ser Elekro <br />
            tambem, junte se a nos.
          </h2>
          <MyButtonTwo class="flex items-center inline-flex gap-2 mt-5">
            <span>Comprar</span>
            <span
              ><img
                class="w-[25px] h-full"
                src="/images/elekro-one/icom+.png"
                alt=""
            /></span>
          </MyButtonTwo>
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
  @apply md:text-5xl mb-10 font-semibold text-3xl;
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
  @apply bg-black border border-white opacity-60;
}
.swiper-pagination-bullet-active {
  @apply bg-[#7CB44C] border-none opacity-100;
}
</style>
