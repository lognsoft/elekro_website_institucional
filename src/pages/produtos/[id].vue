<template>
    <main>
        <section class="pt-[7.75rem] pb-11">
            <div class="w-full max-w-[2500px] mx-auto px-3">
                <div class="grid grid-cols-1 lg:grid-cols-7 gap-3">
                    <div class="lg:col-span-5">
                        <div class="w-full sticky flex items-center justify-center top-[100px] aspect-[2/1.3]">
                            <div class="w-full max-w-[700px]">
                                <MyCarousel :images="alterNativeImages"/>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-2">
                        <div class="py-11">
                            <h1 class="text-5xl font-semibold mb-2">Lorem Ipsum</h1>
                            <h3 class="text-lg mb-6">R$ 00,00</h3>
                            <div class="bg-gray-100 rounded-2xl px-3 py-6 mb-6">
                                <h3 class="text-lg font-semibold mb-2">variações:</h3>
                                <ul class="flex items-center gap-3">
                                    <button
                                        @click="variation = 'black'"
                                        class="w-8 h-8 rounded-full border-2 bg-black"
                                        :class="{'border-sky-500':variation === 'black','border-black':variation != 'black'}"
                                    ></button>
                                    <button
                                        @click="variation = 'white'"
                                        class="w-8 h-8 rounded-full border-2 bg-white"
                                        :class="{'border-sky-500':variation === 'white','border-black':variation != 'white'}"
                                    ></button>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-11">
            <div class="w-full max-w-[2500px] mx-auto px-3">
                <h1 class="text-4xl text-center font-light mb-4">lorem ipsum</h1>
                <div>
                    <figure class="max-w-[700px] mx-auto">
                        <img class="w-full" src="/images/de lado preta.jpeg" alt="maçaneta de lado"/>
                    </figure>
                </div>
            </div>
        </section>
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
                        <h3 class="text-xl font-semibold mb-3">Capacidade de Impressão Digital</h3>
                        <p>100</p>
                    </div>
                    <!-- card single -->
                    <div class="bg-gray-100 rounded-2xl py-6 px-3 text-center">
                        <h3 class="text-xl font-semibold mb-3">Capacidade do Cartão</h3>
                        <p>100</p>
                    </div>
                    <!-- card single -->
                    <div class="bg-gray-100 rounded-2xl py-6 px-3 text-center">
                        <h3 class="text-xl font-semibold mb-3">Capacidade de Senha</h3>
                        <p>100</p>
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

const variation:Ref<string> = ref('black');

type VariationImages = {
    color:string,
    images:string[]
}

const images:Array<VariationImages> = [
    {
        color:'black',
        images: [
            'slide/detalhe-2.jpeg',
            'de lado preta.jpeg'
        ]
    },
    {
        color:'white',
        images: [
            'slide/detalhe-4.jpeg'
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