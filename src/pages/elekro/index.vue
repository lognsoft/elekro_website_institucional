<template>
    <main>
        <Head>
            <Title>Institucional</Title>
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
        <GeneralBanner src="/images/structure.jpg" title="Elekro" text="Design e tecnologia, aliados à segurança"/>
        <section class="elekro-text">
            <div class="mx-auto container max-w-[1200px] px-5 md:px-3 relative z-20">
                <div class="text-base mb-6">
                    <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
                        <p class="mb-2"><span class="quote" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000"><Icon name="bi:quote"/></span>A Elekro projeta fechaduras eletrônicas, incorporando tecnologia biométrica, chaves eletrônicas e conectividade inteligente.</p>
                        <p class="mb-2">Em 2023, projetamos a Elekro One+, série FM-F31, motivo de muito orgulho para nós.</p>
                        <p class="mb-2">Ao darmos início à fabricação de fechaduras inteligentes projetadas para o Brasil, reiteramos nosso compromisso em proporcionar tecnologia, design e praticidade através de soluções inteligentes e conectadas.</p>
                        <p class="mb-2">A fechadura inteligente Elekro One+, e o aplicativo Smart Life, abrem caminhos para inovações futuras que transformam a interação das pessoas com seus lares.</p>
                        <p>Este marco representa nosso firme compromisso em antecipar e atender às demandas da automação residencial, promovendo conforto, segurança e praticidade para os lares modernos.</p>
                    </div>
                    <TextH2Title class="mb-5" data-aos="fade-up" data-aos-duration="1000">Valores</TextH2Title>
                    <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
                        <TextH3Title class="mb-1">Inovação</TextH3Title>
                        <p>Cada ideia começa com a visão de criadores talentosos. Na Elekro, oferecemos as ferramentas necessárias para dar vida às ideias. Abraçamos a inovação como uma filosofia de negócios e promovemos a melhoria contínua em todas as áreas de nossa empresa.</p>
                    </div>
                    <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
                        <TextH3Title class="mb-1">Qualidade</TextH3Title>
                        <p>O compromisso com a qualidade na Elekro é fundamentado na excelência e na busca pela perfeição em todos os estágios de nossos processos, desde o design até a entrega dos produtos. Buscamos incessantemente atender a confiabilidade, durabilidade, altos padrões de segurança e desempenho em todos os nossos produtos.</p>
                    </div>
                    <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
                        <TextH3Title class="mb-1">Respeito pelas pessoas</TextH3Title>
                        <p>Acreditamos que cada pessoa é única e merece viver com qualidade de vida. Comprometemo-nos a promover um ambiente de trabalho inclusivo e respeitoso, onde todos tenham a oportunidade de prosperar e alcançar seu pleno potencial.</p>
                    </div>
                    <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
                        <TextH3Title class="mb-1">Transparência</TextH3Title>
                        <p>O valor de transparência da Elekro é evidenciado em seu compromisso com a comunicação aberta, clara e precisa em suas operações. Almejamos construir relacionamentos sólidos e de confiança com clientes, colaboradores, parceiros e todas as partes interessadas.</p>
                    </div>
                    <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
                        <TextH2Title class="mb-5">Missão</TextH2Title>
                        <p>A missão da Elekro é proporcionar design elegante, tecnologia avançada, segurança e modernidade para o lar, promovendo um ambiente mais inteligente e confortável.</p>
                    </div>
                    <div class="mb-9" data-aos="fade-up" data-aos-duration="1000">
                        <TextH2Title class="mb-5">Visão</TextH2Title>
                        <p>A visão da Elekro é tornar a tecnologia acessível e conveniente para todos os lares, simplificando a vida das pessoas por meio de soluções inteligentes e conectadas.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
</script>

<style scoped>

.elekro-text{
    @apply py-9 text-black bg-white bg-center bg-cover min-h-96 flex items-center relative
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