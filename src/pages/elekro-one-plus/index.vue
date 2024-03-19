<template>
    <!-- <Body class="bg-black text-white"/> -->
    <Head>
        <Title>Elekro One Plus</Title>
    </Head>
    <main>
        <section class="pt-[7.75rem] pb-11">
            <div class="w-full max-w-[2500px] mx-auto px-3">
                <div class="mb-4">
                    <h1 class="font-semibold text-6xl mb-1">Lorem Ipsum</h1>
                    <h2 class="font-light text-xl">R$ 00,00</h2>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-7 gap-3">
                    <div class="lg:col-span-5">
                        <div class="w-full sticky flex items-center justify-center top-[100px] aspect-[2/1.3]">
                            <div class="w-full">
                                <ClientOnly>
                                    <MyCarousel :images="alterNativeImages"/>
                                </ClientOnly>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-2">
                        <div class="py-11">
                            <h3 class="text-3xl font-light mb-2">Selecione a cor de sua preferencia:</h3>
                            <div
                                v-for="{ color },index in images"
                                :key="index"
                                @click="variation = color"
                                class="border-2 rounded-2xl px-3 py-6 mb-6 cursor-pointer"
                                :class="{'text-sky-500 border-sky-500':variation === color,'border-gray-300 text-gray-300':variation !== color}">
                                <h3 class="text-2xl">Cor {{ color }}</h3>
                                <p>R$ 00,00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Funcionalidades :image="imageBanner"/>
        <section class="py-11">
            <div class="container mx-auto px-3">
                <h1 class="text-4xl text-center font-light mb-4">Recursos</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <!-- card single -->
                    <div class="bg-gray-100 rounded-2xl py-6 px-3 text-center">
                        <h3 class="text-xl font-semibold mb-3">Tamanho do Produto</h3>
                        <p>275*65mm</p>
                    </div>
                    <!-- card single -->
                    <div class="bg-gray-100 rounded-2xl py-6 px-3 text-center">
                        <h3 class="text-xl font-semibold mb-3">Materiais</h3>
                        <p>Liga de Alumínio</p>
                    </div>
                    <!-- card single -->
                    <div class="bg-gray-100 rounded-2xl py-6 px-3 text-center">
                        <h3 class="text-xl font-semibold mb-3">Trinco</h3>
                        <p>Trinco Único <b>60-70mm</b> ou Trinco Duplo <b>5050/4585/6085</b></p>
                    </div>
                    <!-- card single -->
                    <div class="bg-gray-100 rounded-2xl py-6 px-3 text-center">
                        <h3 class="text-xl font-semibold mb-3">Fonte de Alimentação</h3>
                        <p>4 Pilhas AAA</p>
                    </div>
                    <!-- card single -->
                    <div class="bg-gray-100 rounded-2xl py-6 px-3 text-center">
                        <h3 class="text-xl font-semibold mb-3">Tensão de Alimentação</h3>
                        <p>4.5V-6V</p>
                    </div>
                    <!-- card single -->
                    <div class="bg-gray-100 rounded-2xl py-6 px-3 text-center">
                        <h3 class="text-xl font-semibold mb-3">Capacidade de Impressões Digitais</h3>
                        <p>Até 100 registros de digitais</p>
                    </div>
                    <!-- card single -->
                    <div class="bg-gray-100 rounded-2xl py-6 px-3 text-center">
                        <h3 class="text-xl font-semibold mb-3">Capacidade de Tags</h3>
                        <p>Até 100 registros de tag</p>
                    </div>
                    <!-- card single -->
                    <div class="bg-gray-100 rounded-2xl py-6 px-3 text-center">
                        <h3 class="text-xl font-semibold mb-3">Capacidade de Senhas</h3>
                        <p>Até 100 registros de senha</p>
                    </div>
                    <!-- card single -->
                    <div class="bg-gray-100 rounded-2xl py-6 px-3 text-center">
                        <h3 class="text-xl font-semibold mb-3">Taxa de Rejeição</h3>
                        <p>＜0.01%</p>
                    </div>
                    <!-- card single -->
                    <div class="bg-gray-100 rounded-2xl py-6 px-3 text-center">
                        <h3 class="text-xl font-semibold mb-3">Velocidade de Reconhecimento</h3>
                        <p>＜0.35S</p>
                    </div>
                    <!-- card single -->
                    <div class="bg-gray-100 rounded-2xl py-6 px-3 text-center">
                        <h3 class="text-xl font-semibold mb-3">Espessura da Porta</h3>
                        <p>30-120mm</p>
                    </div>
                    <!-- card single -->
                    <div class="bg-gray-100 rounded-2xl py-6 px-3 text-center">
                        <h3 class="text-xl font-semibold mb-3">Temperatura de Operação</h3>
                        <p>-20℃-70℃</p>
                    </div>
                    <!-- card single -->
                    <div class="bg-gray-100 rounded-2xl py-6 px-3 text-center">
                        <h3 class="text-xl font-semibold mb-3">Tipo de Porta</h3>
                        <p>Porta Antirroubo / Porta de Madeira / Porta de Aço </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-11">
            <h1 class="text-4xl text-center font-light mb-4">Perguntas frequentes</h1>
            <div class="container max-w-5xl mx-auto px-3">
                <template v-for="faq_single, index in faq" :key="index">
                    <div class="dropdown">
                        <div class="bar-question" @click="faq_single.open = !faq_single.open">
                            <span class="">{{ faq_single.question }}</span>
                            <span class="text-gray-300 duration-200" :class="{'rotate-180':faq_single.open}">
                                <Icon name="ep:arrow-down-bold"/>
                            </span>
                        </div>
                        <div class="response-question" :class="{'h-[0px] overflow-hidden':!faq_single.open, 'h-[150px] overflow-auto py-3':faq_single.open}">
                            <p>{{ faq_single.response }}</p>
                        </div>
                    </div>
                </template>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">

const variation:Ref<string> = ref('preta');

type Question = {
    question: string,
    open: boolean,
    response: string
}

const faq:Ref<Question[]> = ref([
    {
        question: 'Posso instalar a Elekro em qualquer tipo de porta?',
        open:false,
        response: 'Sim, adequada para diversos tipos de portas com instalação profissional inclusa.'
    },
    {
        question: 'Quão eficiente é o consumo de energia da Elekro?',
        open:false,
        response: 'Projetada para eficiência, minimiza trocas de bateria.'
    },
    {
        question: 'Qual é a vida útil da Elekro em condições externas?',
        open:false,
        response: 'Resistente a intempéries, garante desempenho duradouro.'
    },
    {
        question: 'Qual é a política da Elekro?',
        open:false,
        response: '1 ano de garantia e política de devoluções flexível.'
    },
    {
        question: 'A Elekro recebe atualizações de software?',
        open:false,
        response: 'Recebe automaticamente, melhorando funcionalidades e segurança.'
    },
    {
        question: 'Como acesso minha casa se a bateria acabar?',
        open:false,
        response: 'Use chaves físicas fornecidas ou contate suporte.'
    },
    {
        question: 'Que tipo de suporte a Elekro oferece?',
        open:false,
        response: 'Suporte completo via telefone, e-mail e WhatsApp.'
    },
    {
        question: 'Os sons da fechadura podem ser silenciados?',
        open:false,
        response: 'sim'
    }
])

type VariationImages = {
    color:string,
    images:string[],
    picture:string
}

const images:Array<VariationImages> = [
    {
        color:'preta',
        picture: '/images/informacoes-2.png',
        images: [
            'slide/slide-preto-1.jpg',
            'slide/slide-preto-2.jpg',
            'slide/slide-preto-3.jpg',
            'slide/slide-preto-4.jpg',
            'slide/slide-1.jpg'
        ]
    },
    {
        color:'prata',
        picture: '/images/informacoes-1.png',
        images: [
            'slide/slide-prata-1.jpg',
            'slide/slide-prata-2.jpg',
            'slide/slide-prata-3.jpg',
            'slide/slide-prata-4.jpg',
            'slide/slide-1.jpg'
        ]
    }
]

const alterNativeImages = computed(():string[] => {
    let arrayImage:Array<string> = []
    const imageVariation:VariationImages | undefined = images.find((val:VariationImages) => val.color == variation.value);

    if(imageVariation !== undefined){
        arrayImage = imageVariation.images;
    }
    return arrayImage;
})

const imageBanner = computed(():string => {

    const obj:VariationImages | undefined = images.find((val:VariationImages) => val.color == variation.value);

    return obj == undefined ? '/images/informacoes-1.png' : obj.picture;
})

</script>

<style scoped>
.img-fluid{
    width: 100%;
    height: auto;
    max-width: 70rem;
}

#after-clip::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    /* background-color: black; */
    width: 100%;
    height: 100%;
    clip-path: polygon(0% 20%, 100% 0%, 100% 80%, 0% 100%);
}

#after-clip::after{
    @apply z-0 bg-gradient-to-r from-slate-500 to-black
}

.dropdown{
    @apply border-[1px] border-gray-400 overflow-hidden rounded-lg mb-3 text-gray-400
}
.bar-question{
    @apply flex items-center justify-between p-5 text-2xl cursor-pointer
}
.response-question{
    @apply px-5 duration-200
}
</style>