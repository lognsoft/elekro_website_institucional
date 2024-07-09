<script setup lang="ts">
import { texts, recursos, capacidades, praticidades } from "~/core/constants";

</script>

<template>
    <!-- <Body class="bg-black text-white"/> -->
    <Head>
        <Title>Elekro One Plus</Title>
    </Head>
    <main>
        <section class="grid lg:grid-cols-2 relative h-screen ">
            <div class="bg-black w-full hidden lg:block"></div>
            <div class="py-5 md:px-10 px-2 absolute z-[1] h-full">
                <div class="mx-auto max-w-[1900px] flex items-center h-full relative">
                    <div class="w-full">
                        <a class="lg:text-xl ml-0 border px-2 py-1 border-white text-white rounded-lg" href="javascript:void(0)">Faça parte</a>
                        <h1 class="banner-title text-white">Revolucione</h1>
                        <p class="banner-text text-white">Conheça a Elekro Signature</p>
                    </div>
                </div>
            </div>
            <div class=":after:content-[''] after:absolute after:h-full after:w-full after:left-0 after:top-0 after:bg-black after:bg-opacity-30 relative ">
                <img class="h-full object-cover" src="/images/bg-elekro.jpg" alt=""/>
            </div>
           
            <figure class="hidden lg:block absolute left-[44%] 2xl:left-[45%] top-[5%]">
                <img class="object-cover max-w-full max-h-[90vh] " src="/images/home/fechaduraunica.png" alt="">
            </figure>
            
             
        </section>
        <section class="pt-44">
            <div class="max-w-[1900px] mx-auto md:px-10 px-2 h-full">
                <div class="grid md:grid-cols-3  content-center">
                    <div class="col-start-1 col-end-3 border-2 border-black h-[600px]">
                        <div class="bg-black text-white h-[70%] py-12 px-12">
                            <a class="lg:text-xl ml-0 border px-2 py-1 border-white text-white rounded-lg" href="javascript:void(0)">Exclusiva no Brasil</a>
                            <h2 class="text-3xl lg:text-5xl sm:pt-16 pt-10 h2-title">Inspirada na obra <br> de Stefano Boeri,<br> Bosco Verticale.</h2>
                            <h3 class="h3-title sm:pt-10 pt-5">/ Milão . Itália</h3>
                        </div>
                        <div class="flex gap-10 h-[30%] items-center justify-between px-12">
                            <p>A</p>
                            <p>B</p>
                            <p>C</p>
                        </div>
                    </div>
                    <div class="md:block hidden">
                        <img class="object-cover w-full h-full" src="/images/bg-elekro.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        <section class="pt-44">
            <div class="max-w-[1900px] mx-auto md:px-10 px-2 h-full">
                <div class="flex items-center justify-evenly">
                    <div class="">
                        <h2 class="text-5xl max-w-96 pb-10 font-semibold">O inicio de uma nova geração de fechaduras inteligentes</h2>
                        <MyLinkTwo>Assista ao vídeo</MyLinkTwo>
                        <div class="mt-14 pt-10 border-t-2">
                            <h3 class="max-w-[19rem] font-semibold">A COMBINAÇÃO DE SOFISTICAÇÃO COM FUNCIONALIDADES AVANÇADAS</h3>
                            <p class="max-w-[19rem] pt-3">Getway integrado, acesso biométrico, gestão de acesso em tempo real, remoto e muito mais</p>
                        </div>
                    </div>
                    <div class="md:block hidden">
                        <img class="object-cover h-[700px]" src="/images/macaneta-frente.png" alt=""/>

                    </div>
                </div>
            </div>
            
        </section>
        <section>
            <div class="max-w-[1900px] mx-auto md:px-10 px-2 pt-16 border-t-2 ">
                <h2 class="text-5xl pb-10 font-semibold">Explore a <br> Elekro Signature</h2>
                <h3 class="max-w-96 font-medium">PROJETADA PARA AS CONDIÇÕES CLIMÁTICAS DO BRASIL</h3>
                <p class="mt-3">Construída em liga de alumínio e com proteção IP56 (resistente à corrosão, à <br> água* e poeira) <span class="text-[12px]">*Proteção limitada. Protegida de jatos de água de alta pressão de qualquer direção.</span></p>
            </div>
            <div class="mt-24 lg:relative after:content-[''] after:absolute after:h-full after:w-full after:left-0 after:top-0 after:bg-gradient-to-t from-black after:bg-opacity-30">
                <img class="max-h-[600px] object-cover w-full" src="/images/bm-slide/bg-bkp.jpg" alt="">
                <div class="flex lg:absolute bottom-16 z-10 items-center justify-around w-full">
                    <div>
                        <h2 class="text-[#aaaaaa] mb-4">COM DESIGN FUNCIONAL</h2>
                        <h3 class="max-w-96 text-white">Construída com um design funcional, facilmente adaptada para abrir tanto para o lado esquerdo, quanto direito.</h3>
                    </div>
                    <div>
                        <h2 class="text-[#aaaaaa] mb-4">CRIE ECOSISTEMAS DO SEU JEITO</h2>
                        <h3 class="max-w-96 text-white">Ao abrir sua porta, luzes podem se acender, temperatura de ambiente serem ajustadas e muito mais, tudo através do aplicativo.</h3>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="grid grid-cols-1 lg:grid-cols-2 relative">
            <div class="col-span-1 hidden lg:block"></div>
            <div class="col-span-1 relative">
                <img class="absolute h-full hidden lg:block z-20" src="/images/moldura.svg" alt=""/>
                <div class="absolute h-full w-full bg-black/40 z-10"></div>
                <img class="max-w-full min-h-[600px] object-cover" src="https://seapromotionstatic.cdn5th.com/static/275096818692636672.jpg" alt=""/>
            </div>
            <div class="container mx-auto px-3 absolute left-[50%] translate-x-[-50%] h-full flex items-center z-30">
                <div class="w-full text-white lg:text-black">
                    <h1 class="text-[40px] md:text-[50px] max-w-96 mb-[20px] font-semibold">Elekro One+ série FM-F31</h1>
                    <p class="max-w-[500px] mb-2">Com a Elekro, você tem acesso conveniente à sua casa sem precisar de chaves. Seja através de impressão digital, cartão de acesso, senha ou aplicativo.</p>
                    <p class="max-w-[500px] mb-[20px]">Aprimore sua rotina e garanta sua segurança.</p>
                    <MyLink class="ml-0" href="javascript:void(0)">Ver mais</MyLink>
                </div>
            </div>
        </section> .. -->
         <!-- <GeneralBanner src="/images/fechadura/elekro_one.png" title="Fechadura<br/> inteligente" text="Lorem Ipsum dolor amet"/> -->
        <!-- <div class="container-section bg-white">
            <section class="pt-[100px] text-black">
                <div class="container w-full max-w-[1380px] mx-auto px-3">
                    <h2 class="mb-[40px] text-center font-bold text-xl md:text-4xl">Ideal para</h2>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-3 mb-[50px]">
                        <template v-for="obj,index in capacidades" :key="index">
                            <div class="px-10 py-3">
                                <div class="text-3xl text-black">
                                    <Icon :name="obj.icon"/>
                                </div>
                                <h3 class="text-xl my-3 font-semibold">{{ obj.title }}</h3>
                                <p v-if="typeof(obj.text) === 'string'" class="text-sm">{{ obj.text }}</p>
                                <ul v-else class="text-sm list-decimal pl-3">
                                    <li class="mb-1" v-for="text,index in obj.text" :key="index">{{ text }}</li>
                                </ul>
                            </div>
                        </template>
                    </div>
                </div>
            </section>
            <section class="pt-[100px] text-black">
                <div class="container w-full max-w-[1380px] mx-auto px-3">
                    <h2 class="mb-[40px] text-center font-bold text-xl md:text-4xl">Praticidade</h2>
                    <div class="grid md:grid-cols-2 gap-x-9 gap-y-3 mb-[50px]">
                        <template v-for="obj,index in praticidades" :key="index">
                            <div class="px-10 py-3">
                                <div class="text-3xl text-black">
                                    <Icon :name="obj.icon"/>
                                </div>
                                <h3 class="text-xl my-3 font-semibold">{{ obj.title }}</h3>
                                <p v-if="typeof(obj.text) === 'string'" class="text-sm">{{ obj.text }}</p>
                                <ul v-else class="text-sm list-decimal pl-3">
                                    <li class="mb-1" v-for="text,index in obj.text" :key="index">{{ text }}</li>
                                </ul>
                            </div>
                        </template>
                    </div>
                    <div class="text-center">
                        <h2 class="mb-[40px] text-center font-bold text-xl md:text-4xl">Clique no botão abaixo e fale com a Elekro</h2>
                        <MyLink href="/autorizado">Fale com a Elekro</MyLink>
                    </div>
                </div>
            </section>
            <section class="pt-[100px] text-black">
                <div class="container mx-auto px-3 max-w-[1380px]">
                    <h2 class="mb-[40px] text-center font-bold text-xl md:text-4xl">Tecnologia Avançada para uma Vida Mais Confortável e Segura</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-y-5">
                        <template v-for="obj,index in texts" :key="index">
                            <div class="grid grid-cols-1 lg:grid-cols-2">
                                <figure class="col-span-1" :class="{'lg:order-last':obj.inverse}">
                                    <img class="max-h-[600px] mx-auto" :src="obj.img" alt=""/>
                                </figure>
                                <div class="col-span-1 flex items-center">
                                    <div class="w-full px-5">
                                        <h2 class="text-2xl lg:text-5xl mb-[10px] lg:mb-[20px]">{{ obj.title }}</h2>
                                        <p class="text-sm">{{ obj.text }}</p>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </section>
            <section class="py-[100px] text-black">
                <div class="container w-full max-w-[1200px] mx-auto px-3">
                    <h2 class="mb-[40px] text-center font-bold text-xl md:text-4xl">Recursos</h2>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-[50px]">
                        <template v-for="obj,index in recursos" :key="index">
                            <div class="px-11 py-3 relative">
                                <div class="text-3xl absolute left-1 top-0">
                                    <Icon name="i-mdi:checkbox-marked-circle"/>
                                </div>
                                <h3 class="text-xl mb-3 font-semibold">{{ obj.title }}</h3>
                                <p class="text-sm" v-html="obj.text"></p>
                            </div>
                        </template>
                    </div>
                    <h2 class="mb-[20px] text-center font-bold text-2xl md:text-4xl">Integre com Amazon Alexa e Google Assistant</h2>
                    <p class="text-sm text-center">Com nosso sistema de travamento ativado por voz, é possível destravar e verificar o status da fechadura com simples comandos de voz. No ecossistema Smart Life, nossas fechaduras inteligentes conectadas via nosso gateway Bluetooth e Wi-Fi podem facilmente se integrar com Amazon Alexa e Google Assistant. Graças às Rotinas da Alexa, os alto-falantes inteligentes da Amazon podem responder às vinculações de cenários. Integrar com a Amazon Alexa proporciona acesso ao amplo ecossistema de casa inteligente da Amazon.</p>
                </div>
            </section>
            <section class="bg-[url('https://seapromotionstatic.cdn5th.com/static/275168378354909184.jpeg')] bg-center bg-cover min-h-[500px] md:min-h-[600px] bg-no-repeat relative">
                <div class="bg-black/40 absolute w-full h-full top-0 left-0"></div>
            </section>
        </div> -->
    </main>
</template>

<style scoped>
.banner-title{
    @apply w-full text-start text-[50px] md:text-[80px] lg:text-[60px] xl:text-[80px] font-bold leading-[40px] md:leading-[50px] lg:leading-[100px] lg:mt-5 mt-8;
}
.banner-text{
    @apply lg:max-w-[250px] text-xl lg:text-2xl xl:text-5xl text-start font-light lg:mt-0 mt-2;
}

</style>