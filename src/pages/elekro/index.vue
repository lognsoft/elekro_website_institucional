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
        <section class="apresentacao">
            <!-- <video id="video" class="absolute top-0 left-0 w-none h-none min-w-full min-h-screen object-cover" src="/video/blockchain.mp4" loop muted autoplay controls>
                
            </video> -->
            <div class="relative z-10 container mx-auto px-5 h-screen flex items-center text-white">
                <h1 class="w-full text-center lg:text-start text-[40px] md:text-[50px] lg:text-[80px] font-bold leading-[40px] md:leading-[50px] lg:leading-[100px]">Elekro</h1>
            </div>
        </section>
        <section class="py-9 text-black min-h-96 flex items-center">
            <div class="mx-auto container px-5 md:px-3">
                <!-- <div class="col-span-4 lg:col-span-1 pr-2">
                    <TitleSection class="text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">Lorem Ipsum</TitleSection>
                </div> -->
                <div class="">
                    <div class="text-xl mb-6 whitespace-pre-line" data-aos="fade-up" data-aos-duration="1000">
                        <p class="mb-3"><span class="quote" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000"><MyIcon icon="bi:quote"/></span>A Elekro destaca-se como a melhor parceira para quem busca o melhor em tecnologia, desempenho e economia.</p>
                        <p class="mb-3">Impulsionada pela inovação e pelo avanço tecnológico, a Elekro não apenas acompanha as tendências globais, mas também as define.</p>
                        <p class="mb-3">Com mais de uma década de experiência em projetos internacionais de engenharia, a Elekro destacou-se ao desenvolver tecnologia para o Brasil nas áreas de energias renováveis e inteligência artificial, em parceria com grandes empresas no país e no exterior.</p>
                        <p class="mb-3">Em 2023, conquistamos nosso grande orgulho, a Elekro One Plus.</p>
                        <p class="mb-3">Ao iniciarmos a fabricação de fechaduras inteligentes, desenvolvidas por brasileiros, reafirmamos nossa missão de oferecer tecnologia, design e sofisticação que facilitam a vida das pessoas.</p>
                        <p class="mb-3">A fechadura inteligente da Elekro, aliada ao aplicativo Elekro Smart, abre caminhos para inovações futuras que transformam a interação das pessoas com seus lares, representando o início de nosso avanço e de nosso compromisso em antecipar e satisfazer as necessidades no mundo dos eletrodomésticos inteligentes.</p>
                        <p class="mb-3">Com esse passo, abrimos novos caminhos para inovações futuras, prontos para superar expectativas e transformar a interação das pessoas com seus lares.</p>
                        <p>Na Elekro, prezamos por um padrão elevado de atendimento ao cliente, comprometidos a oferecer o melhor serviço, entrega, qualidade aliados ao melhor preço.</p>
                    </div>

                    <p class="text-sm" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">-Time Elekro.</p>
                </div>
            </div>
        </section>
        <!-- <section class="py-9 bg-slate-400 min-h-96 flex items-center">
            <div class="mx-auto w-full max-w-[1900px] px-5 md:px-3 grid grid-cols-6">
                <div class="col-span-6 lg:col-span-2 pr-2">
                    <TitleSection class="text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">Lorem Ipsum</TitleSection>
                </div>
                <div class="col-span-6 lg:col-span-4">
                    <p class="text-xl text-white" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quod fugiat accusantium voluptatibus dolorum ipsa sint,
                        voluptas voluptates aliquid distinctio quisquam deleniti exercitationem nobis assumenda, similique quasi in soluta qui?
                    </p>
                </div>
            </div>
        </section> -->
        
    </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
.apresentacao{
    @apply relative w-full overflow-hidden bg-[url('/images/trabalhadores.jpg')] bg-no-repeat bg-cover bg-right
}
.apresentacao:after{content:''}
.apresentacao:after{
    @apply absolute w-full h-full bg-black/40 top-0 left-0
}

.quote{
    @apply text-amber-600 text-3xl relative
}

.quote{
    top: -5px;
}
.bg-image{
    max-height: 26rem !important;
}

#video::-webkit-media-controls {
    display: none;
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