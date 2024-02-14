<template>
    <main>
        <Banner>
            FaQ
        </Banner>
        <section class="py-11">
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

</script>

<style scoped>
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