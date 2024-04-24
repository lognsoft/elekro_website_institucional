<script setup lang="ts">

// const route = useRoute();
// console.log(route.path);


</script>

<template>
    <main class="mt-[100px]">
        <section class="py-11">
            <div class="container mx-auto px-3">
                <h2Title class="mb-4">Fontes</h2Title>
                <h6>H2-Titulo:</h6>
                <H2Title>título h2 padrão</H2Title>
                <hr/>

                <h6>H3-Titulo:</h6>
                <H3Title>título h3 para textos</H3Title>
                <hr/>

                <h6>H4-Subtitulo:</h6>
                <H4SubTitle>título h4 padrão de subtítulo</H4SubTitle>
                <hr/>

                <h6>parágrafo:</h6>
                <p>paragráfo normal</p>
                <hr/>

                <h2Title class="mb-4">Cores</h2Title>
                <h6>Preta</h6>
                <div class="color">
                    <div class="box bg-[#000000]"></div>
                    <span>#000000</span>
                </div>
                <hr/>

                <h6>Cinza</h6>
                <div class="color">
                    <div class="box bg-[#626262]"></div>
                    <span>#626262</span>
                </div>
                <hr/>

                <h6>Cinza claro</h6>
                <div class="color">
                    <div class="box bg-[#aaaaaa]"></div>
                    <span>#aaaaaa</span>
                </div>
                <hr/>

                <h6>Branco</h6>
                <div class="color">
                    <div class="box bg-white"></div>
                    <span>#ffffff</span>
                </div>
                <hr/>

                <h6>Azul</h6>
                <div class="color">
                    <div class="box bg-[#1a6bd9]"></div>
                    <span>#1a6bd9</span>
                </div>
                <hr/>
            </div>
        </section>
    </main>
</template>

<style scoped>
hr{
    @apply mb-5
}
.color{
    @apply flex items-center gap-x-3 py-1
}
.box{
    @apply w-7 h-7 border-[1px] border-black;
}
</style>