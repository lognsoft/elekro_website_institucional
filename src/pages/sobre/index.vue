<template>
    <main>
        <Head>
            <Title>Sobre</Title>
            <Meta name="description" content="lorem ipsum"/>
            <Meta property="og:description" content="lorem ipsum"/>
            <Meta property="og:title" content="Elekro - Sobre"/>
            <Meta property="og:image" content="/images/elekro-banner.jpg"/>
            <Meta property="og:url" content="https://meuSite.com"/>
            <Meta name="twitter:title" content="Elekro - Sobre"/>
            <Meta name="twitter:description" content="lorem ipsum"/>
            <Meta name="twitter:image" content="/images/elekro-banner.jpg"/>
            <Meta name="twitter:card" content="summary_large_image"/>
        </Head>
        <GeneralBanner src="/images/bm-slide/bg4.png" image="/images/elekro-branco.png" :showImage="true" text="Design e tecnologia, aliados à segurança"/>
        <section class="elekro-text">
            <div class="mx-auto container max-w-[1200px] px-5 md:px-3 relative z-20">
                <div class="text-base mb-6">
                    <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
                        <p class="mb-2"><span class="quote" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000"><Icon name="bi:quote"/></span>A Elekro projeta fechaduras eletrônicas, incorporando tecnologia biométrica, chaves eletrônicas e conectividade inteligente e
                        representa o início de nosso avanço e compromisso em antecipar e satisfazer as necessidades no mundo dos eletrodomésticos
                        inteligentes no Brasil.
                        </p>
                        <!-- <p class="mb-2">Em 2023, projetamos a Elekro One+, série FM-F31, e ao darmos início à fabricação de fechaduras inteligentes projetadas para o Brasil, reiteramos nosso compromisso em proporcionar tecnologia, design e praticidade através de soluções inteligentes e conectadas.</p>
                        <p class="mb-2">A fechadura inteligente Elekro One+, e o aplicativo Smart Life, abrem caminhos para inovações futuras que transformam a interação das pessoas com seus lares.</p>
                        <p>Este marco representa nosso firme compromisso em antecipar e atender às demandas da automação residencial, promovendo conforto, segurança e praticidade para os lares modernos.</p> -->
                    </div>
                    <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
                        <TextH2Title class="mb-5">Missão</TextH2Title>
                        <p>Proporcionar segurança e conforto excepcionais aos nossos clientes, comprometidos em estabelecer uma conexão próxima,
                        compreendendo suas necessidades individuais e superando expectativas. Buscamos preencher as lacunas do mercado, oferecendo inovação e
                        excelência em cada produto e que permeia todas as etapas, desde o design até o suporte pós-venda. Na Elekro, nossa missão é criar lares mais
                        seguros, confortáveis e conectados.</p>
                    </div>
                    <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
                        <TextH2Title class="mb-5">Visão</TextH2Title>
                        <p>Tornar-se a marca líder de eletrodomésticos no Brasil, reconhecida por sua qualidade excepcional. Visamos ser a primeira escolha dos
                        consumidores quando se trata de eletrodomésticos, estabelecendo um padrão de excelência que redefine o mercado. Quando as pessoas pensarem
                        em eletrodomésticos, automaticamente pensem na Elekro, associando nossa marca à confiança, inovação e valor.</p>
                    </div>
                    <TextH2Title class="mb-5" data-aos="fade-up" data-aos-duration="1000">Valores</TextH2Title>
                    <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
                        <TextH3Title class="mb-1">Inovação</TextH3Title>
                        <p>Nossa paixão pela inovação nos impulsiona a buscar constantemente novas ideias e tecnologias, garantindo produtos de alta qualidade,
                        desempenho e confiabilidade que revolucionam a experiência de segurança e o conforto dos nossos clientes.</p>
                    </div>
                    <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
                        <TextH3Title class="mb-1">Excelência</TextH3Title>
                        <p>Nosso compromisso com a excelência é guiado pela transparência e pela honestidade, refletindo-se em cada etapa do nosso processo,
                        garantindo assim a satisfação e alta qualidade dos nossos produtos.</p>
                    </div>
                    <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
                        <TextH3Title class="mb-1">Comprometimento</TextH3Title>
                        <p>A base de nossa atuação, buscando sempre a inovação e a excelência, impactando positivamente a vida das pessoas para
                        superar suas expectativas, o motivo de cada uma de nossas ações.</p>
                    </div>
                    <!-- <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
                        <TextH3Title class="mb-1">Transparência</TextH3Title>
                        <p>O valor de transparência da Elekro é evidenciado em seu compromisso com a comunicação aberta, clara e precisa em suas operações. Almejamos construir relacionamentos sólidos e de confiança com clientes, colaboradores, parceiros e todas as partes interessadas.</p>
                    </div> -->
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
</script>

<style scoped>

.elekro-text{
    @apply py-9 text-black bg-center bg-cover min-h-96 flex items-center relative
}

.quote{
    @apply text-black text-3xl relative
}

.quote{
    top: -5px;
}
.bg-image{
    max-height: 26rem !important;
}

@media screen and (min-width: 640px){
    .bg-image{
        max-height: 30rem !important;
    }
}
@media screen and (min-width: 768px){
    .bg-image{
        max-height: 30rem !important;
    }
}
@media screen and (min-width: 1024px){
    .bg-image{
        max-height: 35rem !important;
    }
}
@media screen and (min-width: 1280px){
    .bg-image{
        max-height: 40rem !important;
    }
}
@media screen and (min-width: 1536px){
    .bg-image{
        max-height: 45rem !important; 
    }
}
</style>