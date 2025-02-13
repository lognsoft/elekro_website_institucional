<template>
  <main>
    <Head>
      <Title>Sobre</Title>
      <Meta name="description" content="lorem ipsum" />
      <Meta property="og:description" content="lorem ipsum" />
      <Meta property="og:title" content="Elekro - Sobre" />
      <Meta property="og:image" content="/images/elekro-banner.jpg" />
      <Meta property="og:url" content="https://meuSite.com" />
      <Meta name="twitter:title" content="Elekro - Sobre" />
      <Meta name="twitter:description" content="lorem ipsum" />
      <Meta name="twitter:image" content="/images/elekro-banner.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
    </Head>
    <!-- <GeneralBanner
      src="/images/banner/bg-sobre-2.png"
      alt="Elekro"
      title="Tecnologia que Protege,<br>Inovação que Conecta"
    /> -->
    <section class="elekro-text">
      <div class="mx-auto container max-w-[1200px] px-5 md:px-3 relative z-20">
        <div class="text-base mb-6">
          <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
            <p class="mb-2">
              <!-- <span
                class="quote"
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="1000"
                ><Icon name="bi:quote" /></span
              > -->
              
              Nos últimos 10 anos, a Elekro tem sido o parceiro estratégico de grandes corporações globais, desenvolvendo tecnologias customizadas e fornecendo soluções OEM de alta performance para setores como automotivo, IoT e mercados conectados. Com expertise em inteligência artificial, veículos elétricos e sistemas integrados, a Elekro construiu uma reputação sólida como catalisadora de avanços tecnológicos.
              <br><br>
              Agora, com o lançamento de sua marca própria, a Elekro canaliza sua experiência para liderar com autoridade em novos mercados. Design sofisticado, tecnologia avançada e segurança inigualável são os pilares que definem nossa visão e consolidam nossa posição como referência em soluções premium.

            </p>
          </div>
          <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
            <TextH2Title class="mb-5">Soluções Que Inspiram Liderança</TextH2Title>
            <p>
              As fechaduras eletrônicas da Elekro representam a fusão perfeita entre inovação, funcionalidade e estética, refletindo nosso compromisso inabalável em entregar confiabilidade e excelência. Essas soluções posicionam nossos parceiros e clientes na vanguarda de um mercado em rápida evolução.
            </p>
          </div>
          <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
            <TextH2Title class="mb-5">Missão</TextH2Title>
            <p>
              Entregar design e tecnologias inovadoras que sejam seguras, robustas e eficientes, proporcionando soluções de excelência que elevem o conforto, a produtividade e a praticidade na vida de nossos clientes.
            </p>
          </div>
          <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
            <TextH2Title class="mb-5">Visão</TextH2Title>
            <p>
              Liderar pela inovação e excelência em soluções tecnológicas, fortalecendo nossa posição como a primeira escolha de consumidores e parceiros.
            </p>
          </div>
          <TextH2Title class="mb-5" data-aos="fade-up" data-aos-duration="1000"
            >Valores</TextH2Title
          >
          <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
            <TextH3Title class="mb-1">Inovação</TextH3Title>
            <p>
              Nossa paixão é explorar novas tecnologias para criar soluções disruptivas e confiáveis.
            </p>
          </div>
          <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
            <TextH3Title class="mb-1">Excelência</TextH3Title>
            <p>
              Garantimos qualidade em todas as etapas, superando expectativas.
            </p>
          </div>
          <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
            <TextH3Title class="mb-1">Comprometimento</TextH3Title>
            <p>
              Atuamos para impactar positivamente a vida das pessoas, criando valor em tudo o que fazemos.
            </p>
          </div>
         <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
            <TextH3Title class="mb-1">Elekro</TextH3Title>
            <p>Design e tecnologia aliados à segurança.</p>
         </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHeadSafe({
    link:[
        { rel: "canonical", href: "https://elekro.com.br/sobre" }
    ]
})
</script>

<style scoped>
.elekro-text {
  @apply py-20 text-black bg-center bg-cover min-h-96 flex items-center relative;
}

.quote {
  @apply text-black text-3xl relative;
}

.quote {
  top: -5px;
}
.bg-image {
  max-height: 26rem !important;
}

@media screen and (min-width: 640px) {
  .bg-image {
    max-height: 30rem !important;
  }
}
@media screen and (min-width: 768px) {
  .bg-image {
    max-height: 30rem !important;
  }
}
@media screen and (min-width: 1024px) {
  .bg-image {
    max-height: 35rem !important;
  }
}
@media screen and (min-width: 1280px) {
  .bg-image {
    max-height: 40rem !important;
  }
}
@media screen and (min-width: 1536px) {
  .bg-image {
    max-height: 45rem !important;
  }
}
</style>
