<template>
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
        <Funcionalidades/>
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
    </main>
</template>

<script setup lang="ts">

const variation:Ref<string> = ref('preta');

type VariationImages = {
    color:string,
    images:string[]
}

const images:Array<VariationImages> = [
    {
        color:'preta',
        images: [
            'slide/slide-preto-1.jpg',
            'slide/slide-preto-2.jpg',
            'slide/slide-preto-3.jpg',
            'slide/slide-preto-4.jpg',
            'slide/slide-1.jpg'
        ]
    },
    {
        color:'prateado',
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
</style>