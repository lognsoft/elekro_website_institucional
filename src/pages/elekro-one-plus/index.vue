<script setup lang="ts">
import { texts, recursos, capacidades, praticidades } from "~/core/constants";

</script>

<template>
    <!-- <Body class="bg-black text-white"/> -->
    <Head>
        <Title>Elekro One Plus</Title>
    </Head>
    <main>
        <section class="grid lg:grid-cols-2 relative h-screen">
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
            <div class=":after:content-[''] after:absolute after:h-full after:w-full after:left-0 after:top-0 after:bg-black after:bg-opacity-30 relative">
                <figure class="h-full">
                    <img class="h-full object-cover" src="/images/bg-elekro.jpg" alt=""/>
                </figure>
            </div>
           
            <figure class="hidden lg:block absolute left-[44%] 2xl:left-[45%] top-[5%]">
                <img class="object-cover max-w-full max-h-[90vh] " src="/images/home/fechaduraunica.png" alt="">
            </figure>
            
             
        </section>
        <section class="pt-10">
            <div class="max-w-[1900px] mx-auto md:px-10 px-1 h-full">
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
                        <figure class="h-full">
                            <img class="object-cover w-full h-full" src="/images/bg-elekro.jpg" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section class="max-w-[1900px] mx-auto md:px-10 px-1 h-full pt-5 pb-10">
            <div class="max-w-[1300px] mx-auto h-full">
                <div class="grid lg:grid-cols-2">
                    <div class="">
                        <h2 class="titleh2">O inicio de uma nova geração de fechaduras inteligentes</h2>
                        <MyLink class="mb-36">Assista ao vídeo</MyLink>
                        <div class="border-t-2 pt-5 max-w-96">
                            <h3 class="max-w-[19rem] titleh3">A COMBINAÇÃO DE SOFISTICAÇÃO COM FUNCIONALIDADES AVANÇADAS</h3>
                            <h4 class="max-w-[19rem] titleh4">Getway integrado, acesso biométrico, gestão de acesso em tempo real, remoto e muito mais</h4>
                        </div>
                    </div>
                    <div class="lg:block hidden justify-self-end">
                        <figure>
                            <img class="object-cover h-[700px]" src="/images/macaneta-frente.png" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
            
        </section>
        <section class="pt-5 border-t-2">
            <div class="max-w-[1900px] mx-auto md:px-10 px-1 h-full ">
                <div class="max-w-[1300px] mx-auto h-full ">
                    <h2 class="titleh2">Explore a <br> Elekro Signature</h2>
                    <h3 class="max-w-96 titleh3">PROJETADA PARA AS CONDIÇÕES CLIMÁTICAS DO BRASIL</h3>
                    <h4 class="titleh4">Construída em liga de alumínio e com proteção IP56 (resistente à corrosão, à <br> água* e poeira) <span class="text-[12px]">*Proteção limitada. Protegida de jatos de água de alta pressão de qualquer direção.</span></h4>
                </div>
            </div>
            <div class="w-full relative after:content-[''] after:absolute after:h-5/6 after:w-full after:left-0 after:bottom-0 after:bg-gradient-to-t from-black after:bg-opacity-30 pt-10">
                <figure>
                    <img class="max-h-[600px]  object-cover w-full " src="/images/bm-slide/bg-bkp.jpg" alt="">
                </figure>
                <div class="absolute bottom-0 z-10 w-full max-w-[1900px] mx-auto md:px-10 px-1">
                    <div class="grid grid-cols-2 max-w-[1300px] mx-auto max-md:px-1">
                        <div>
                            <h2 class="text-[#aaaaaa] mb-4">COM DESIGN FUNCIONAL</h2>
                            <h3 class="max-w-96 text-white titleh3">Construída com um design funcional, facilmente adaptada para abrir tanto para o lado esquerdo, quanto direito.</h3>
                        </div>
                        <div class="justify-self-end">
                            <h2 class="text-[#aaaaaa] mb-4">CRIE ECOSISTEMAS DO SEU JEITO</h2>
                            <h3 class="max-w-96 text-white titleh3">Ao abrir sua porta, luzes podem se acender, temperatura de ambiente serem ajustadas e muito mais, tudo através do aplicativo.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="max-w-[1900px] mx-auto md:px-10 px-1 h-full pt-5">
            <div class="max-w-[1300px] mx-auto h-full">
                <div class="grid md:grid-cols-2">
                    <div>
                        <h2 class="titleh2">Diversas funções e <br> criptografia <br> segura</h2>
                        <h3 class="titleh3">Criptografia com <br> Chip integrado de proteção</h3>
                    </div>
                    <div class="md:justify-self-end max-md:pt-10">
                        <div class="mb-5">
                            <h3 class="titleh3">MODOS DE ACESSO</h3>
                            <h4 class="max-w-96 titleh4">Acesso Privado, apenas para o administrador e acesso livre, para que qualquer um acesse</h4>
                        </div>
                        <div class="border-t-2">
                            <h3 class="titleh3">CONFIGURAÇÕES DE VOLUME</h3>
                            <h4 class="max-w-96 titleh4">Controle de volume e modo silencioso, que não emite sons ao utilizar a fechadura</h4>
                        </div>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 max-md:gap-10 lg:pt-44 pt-10">
                    <div class="">
                        <figure class="max-w-[500px] xl:max-w-[704px]">
                            <img class="object-contain mx-auto" src="/images/porta-de-carregamento-preta.jpeg" alt=""/>
                        </figure>
                    </div>
                    <div class="md:justify-self-end">
                        <MyLink class="m-0">Bateria inteligente</MyLink>
                        <h3 class="titleh3">ALERTAS DE BATERIA E VIOLAMENTO</h3>
                        <h4 class="max-w-96 titleh4">adicionando o getway da Elekro, receba aviso de bateria fraca, violamento ou tentativa indevida de abertura da fechadura.</h4>
                        <h4 class="max-w-96 titleh4">Caso não veja o alarme, você ainda  pode abrir a porta utilizando a chave mestra ou então utilizar a entrada USB localizada na parte de baixo para energizar a fechadura.</h4>
                    </div>
                </div>
            </div>
        </section>
        <aside class="pt-10">
            <div class="w-full relative after:content-[''] after:absolute after:h-full after:w-full after:left-0 after:top-0 after:bg-gradient-to-r from-black after:bg-opacity-30">
                <figure>
                    <img class="w-full max-h-[600px] object-cover" src="/images/bm-slide/bg-bkp.jpg" alt="">
                </figure>
                <div class="absolute lg:top-28 xl:top-16 top-12 md:top-20 left-1/4  z-10">
                    <h2 class="text-[20px] md:text-[50px] lg:text-[60px] xl:text-[80px] w-auto text-white">Funções para <br> empresa, com <br> gestão completa <br> de usuarios.</h2>
                </div>
            </div>
        </aside>
        <section class="max-w-[1900px] mx-auto md:px-10 px-1 h-full pt-5">
            <div class="max-w-[1300px] mx-auto h-full" >
                <div class="grid lg:grid-cols-2 pb-10">
                    <div class="flex flex-col ">
                        <h3 class="titleh3">CADASTRE ATÉ 100 <br> BIOMETRIAS E ATÉ 100 <br> SENHAS NUMÉRICAS <br> DIFERENTES</h3>
                        <h4 class="max-w-96 titleh4">Ideal para empresas, você pode dar acesso a diversos funcionários e parceiros com as senhas biométricos ou numéricas. Além disso, é possível gerenciar todo o acesso por meio do aplicativo com: historico permissões e áreas restritas, inclusão e exclusão em tempo real e muito mais.</h4>
                    </div>
                    <div class="flex flex-col lg:justify-self-end">
                        <h3 class="titleh3">CRIE SENHA COM HORÁRIO <br> DE ENTRADA E SAÍDA</h3>
                        <h4 class="max-w-96 titleh4">Com a função de Check-in e Check-out crise senhas com data de entrada e saída. Perfeito para Airbnb ou locações por temporada.</h4>
                        <h3 class="titleh3">LIBERE O ACESSO COM A SENHA DINÂMICA</h3>
                        <h4 class="max-w-96 titleh4">Ideal para imobiliárias, você pode criar uma senha dinâmica, de uso único. Garanta o acesso de forma segura, rápida e prática.</h4>
                    </div>
                </div>
                <div class="border-t-2 pt-5">
                    <div class="pb-5">
                        <h2 class="titleh2 text-center">Integre com Amazon Alexa <br> e Google Assistant</h2>
                        <figure>
                            <img src="/images/trabalhadores.jpg" alt="">
                        </figure>
                    </div>
                    <div class="grid lg:grid-cols-2">
                        <div class="flex flex-col">
                            <h3 class="titleh3">DESTRAVE E VERIFIQUE O <br> STATUS DA FECHADURA <br> COM SIMPLES COMANDOS <br> DE VOZ</h3>
                            <h4 class="max-w-96 titleh4">Função disponível com o nosso sistema de travamento ativado por voz.</h4>
                        </div>
                        <div class="flex flex-col lg:justify-self-end">
                            <h4 class="max-w-96 titleh4">No ecossistema Smart Life, nossa fechaduras inteligentes conectadas via nosso getway Bluetooth e Wi-fi podem facilmente se integrar com a Amazon Alexa e Google Assistant.</h4>
                            <h4 class="max-w-96 titleh4">Graças às rotinas da Alexa, os alto-falantes inteligentes da Amazon podem responder às vinculações de cenários</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="pt-10">
            <div>
                <div class="">
                    <h2></h2>
                    <figure>
                        <img class="w-full object-cover max-h-[400px]" src="/images/trabalhadores.jpg" alt="">
                    </figure>
                </div>
            </div>
            <div class="w-full relative after:content-[''] after:absolute after:h-full after:w-1/2 after:left-0 after:top-0 md:after:bg-black ">
                <div class="max-w-[1300px] mx-auto h-full z-10 relative">
                    <div class="grid md:grid-cols-2 ">
                        <div class="text-white max-md:bg-black py-20 max-md:py-10 max-lg:text-center">
                            <h3 class="titleh3">INTEGRAÇÃO</h3>
                            <h4 class="max-w-96 titleh4">O Smart Life pode ser integrado a outros dispositivos domésticos inteligentes, como sistemas de segurança, câmeras de vigilancia e dispositivos de iluminação. Isso permite automatizar tarefas e criar cenários personalizados.</h4>
                        </div>
                        <div class="md:justify-self-end py-20 max-md:py-10 max-lg:text-center">
                            <h3 class="titleh3">CONTROLE REMOTO</h3>
                            <h4 class="max-w-96 titleh4">adicionando o getway da Elekro, com o Smart Life, os usuários podem controlar suas fechaduras inteligentes remotamente por meio do aplicativo em seus dispositivos móveis. isso permite destrancar portas de qualquer lugar, oferecendo conveniência e segurança adicional.</h4>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        <section class="">
            <div class="bg-black text-white">
                <div class="max-w-[1900px] mx-auto md:px-10 px-1 h-full">
                    <div class="max-w-[1300px] mx-auto h-full text-center">
                        <div class="grid md:grid-cols-4 grid-cols-2 border-b-2">
                            <div>
                                <h4>Tamanho do produto</h4>
                                <p>275*65mm</p>
                            </div>
                            <div>
                                <h4>Fontes de <br> alimentação</h4>
                                <p>4 Pilhas AAA</p>
                            </div>
                            <div>
                                <h4>Capacidades de <br> tags</h4>
                                <p>Até 100 registros <br> de tag</p>
                            </div>
                            <div>
                                <h4>Velocidade de <br> reconhecimento</h4>
                                <p>< 0.35S</p>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-4 grid-cols-2">
                            <div>
                                <h4>Tensão de alimentação</h4>
                                <p>4.5V-6V</p>
                            </div>
                            <div>
                                <h4>Capacidade de <br> senhas</h4>
                                <p>Até 100 registros de senha</p>
                            </div>
                            <div>
                                <h4>Capacidade de <br> biometrias</h4>
                                <p>Até 100 registros <br> de digitais</p>
                            </div>
                            <div>
                                <h4>Espessura da porta</h4>
                                <p>30-120mm</p>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-4 grid-cols-2">
                            <div>
                                <h4>Tipo de porta</h4>
                                <p>Porta Antirroubo <br>
                                Porta de Madeira <br> Porta de Aço</p>
                            </div>
                            <div>
                                <h4>Tipos de trinco</h4>
                                <p>Trinco Único <br> 60-70mm ou <br> Trinco Duplo <br> 5050/4585/6085</p>
                            </div>
                            <div>
                                <h4>Temperatura <br> operacional</h4>
                                <p> -20°C-70°C </p>
                            </div>
                            <div>
                                <h4>Taxa de <br> rejeição</h4>
                                <p>< 0.01%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="max-w-[1900px] mx-auto md:px-10 px-1 h-full pt-10 pb-10">
            <div class="max-w-[1300px] mx-auto h-full">
                <h2 class="banner-title">Venha ser Elekro <br> tambem, junte se a nos.</h2>
                <MyLink>Comprar</MyLink>
            </div>
        </section>
       
    </main>
</template>

<style scoped>
.banner-title{
    @apply text-start text-[50px] md:text-[80px] lg:text-[60px] xl:text-[80px] font-bold leading-[40px] md:leading-[50px] lg:leading-[100px] lg:mt-5 mt-8;
}
.banner-text{
    @apply lg:max-w-[250px] text-xl lg:text-2xl xl:text-5xl text-start font-light lg:mt-0 mt-2;
}

.titleh2{
    @apply text-5xl mb-10 font-semibold mt-5
}
.titleh3{
    @apply font-semibold mt-5 text-xl
}
.titleh4{
    @apply mt-5 text-base
}
</style>