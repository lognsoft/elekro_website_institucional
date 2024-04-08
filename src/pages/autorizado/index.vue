<template>
    <main class="text-[#333]">
        <Head>
            <Title>Seja Um Autorizado</Title>
            <Meta name="description" content="lorem ipsum"/>
            <Meta property="og:description" content="lorem ipsum"/>
            <Meta property="og:title" content="Elekro - Contato"/>
            <Meta property="og:image" content="/images/elekro-banner.jpg"/>
            <Meta property="og:url" content="https://meuSite.com"/>
            <Meta name="twitter:title" content="Elekro - Contato"/>
            <Meta name="twitter:description" content="lorem ipsum"/>
            <Meta name="twitter:image" content="/images/elekro-banner.jpg"/>
            <Meta name="twitter:card" content="summary_large_image"/>
        </Head>
        <Body class="bg-white"/>
        <Banner class="bg-center bg-cover bg-no-repeat bg-[url('/images/AdobeStock.jpeg')]" title="Seja um autorizado" text="Entrega eficiente, tecnologia de ponta"/>
        <section class="pt-11">
            <div class="container mx-auto px-5 md:px-3 max-w-[1350px]">
                <h2 class="mb-[40px] text-center font-bold text-2xl md:text-4xl">Ao tornar-se um autorizado Elekro, disponibilizamos</h2>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <template v-for="info,index in infos" :key="index">
                        <div class="box">
                            <div class="flex items-center gap-x-2 mb-3">
                                <div v-if="!info.svg" class="icon">
                                    <Icon :name="info.icon"/>
                                </div>
                                <div v-else class="icon" v-html="info.icon"></div>
                                <h3 class="title">{{ info.title }}</h3>
                            </div>
                            <div class="text" v-html="info.text"></div>
                        </div>
                    </template>
                </div>
            </div>
        </section>
        <Formulario/>
    </main>
</template>

<script setup lang="ts">

//tipos
import type { Info } from '~/types'

const infos:Info[] = [
    {
        icon:'mdi:partnership',
        title: 'Parceria estratégica',
        text: 'Preços competitivos, negociação especial com MOQ, projetos e licitações.',
        svg:false,
    },
    {
        icon:'ion:analytics-sharp',
        title:'Análise especial de crédito',
        text:'Condições especiais de prazo de pagamento para parceiros de relacionamento estratégicos com a Elekro.',
        svg:false,
    },
    {
        icon:'subway:time-3',
        title:'Lead-time de entrega',
        text:'Em até duas semanas após a aprovação do pedido.',
        svg:false,
    },
    {
        icon:'mdi:partnership',
        title:'Parceria comercial',
        text:'Com nossa base de dados, direcionaremos clientes interessados para distribuidores exclusivos na região, garantindo acesso fácil ao produto desejado.',
        svg:false,
    },
    {
        icon:'fa6-solid:headset',
        title:'Suporte Técnico',
        text:'Os autorizados têm acesso ao programa de capacitação de equipe de vendas, realizado trimestralmente, e suporte técnico local.',
        svg:false,
    },
    {
        icon:"nimbus:marketing",
        title:"Marketing e Promoção",
        text:"Oferecemos os materiais de apoio de marketing, ajudando a impulsionar a visibilidade da marca em sua loja.",
        svg:false
    },
    {
        icon:"mdi:idea",
        title:"Participação nas inovações da Elekro",
        text:"Implementamos suas sugestões de melhorias em conjunto com nossa equipe de P&D.",
        svg:false
    },
    {
        icon:"streamline:arrow-roadmap-solid",
        title:"Roadmap",
        text:"Entramos em contato com nossos autorizados semestralmente para alinhar o plano estratégico de produtos, que antecipam as tendências de mercado.",
        svg:false
    },
    {
        icon:"mingcute:certificate-fill",
        title:"Certificação",
        text:"Cumprimos integralmente com todos os padrões estabelecidos pela Anatel, garantindo a qualidade e conformidade conforme lei nº 9.472.",
        svg:false
    },
    {
        icon:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 192.756 192.756"><g fill-rule="evenodd" clip-rule="evenodd"><path d="M96.378 16.258c44.13 0 80.12 35.992 80.12 80.12 0 44.13-35.99 80.12-80.12 80.12-44.129 0-80.121-35.99-80.121-80.12 0-44.128 35.992-80.12 80.121-80.12zm0 3.237c42.347 0 76.884 34.538 76.884 76.883 0 42.347-34.537 76.884-76.884 76.884-42.346 0-76.883-34.537-76.883-76.884 0-42.346 34.537-76.883 76.883-76.883zm0 2.832c40.786 0 74.052 33.265 74.052 74.051s-33.266 74.052-74.052 74.052c-40.786 0-74.05-33.266-74.05-74.052 0-40.786 33.264-74.051 74.05-74.051zm0 2.428c39.45 0 71.622 32.174 71.622 71.623C168 135.826 135.828 168 96.378 168c-39.448 0-71.623-32.174-71.623-71.622 0-39.449 32.175-71.623 71.623-71.623zM37.832 130.986l-.633.633c-19.34-32.953-9.13-79.823 30.771-97.991v7.999l-.007.004-.335 117.337a72.663 72.663 0 0 1-6.669-3.52v-49.887H35.774c1.167 7.646 3.677 15.082 7.436 21.838-1.799 1.201-3.53 2.433-5.378 3.587zm23.126-31.588V45.849C42.016 58.902 33.99 79.44 35.127 99.398h25.831zm32.714 65.788a70.1 70.1 0 0 1-2.095-.105c-.035-.004-.069-.004-.104-.008h-.009c-.172-.012-.344-.023-.516-.037-.035-.002-.07-.004-.106-.008l-.024-.002a67.436 67.436 0 0 1-19.244-4.385v-7.429l.102-121.149a70.121 70.121 0 0 1 14.239-3.769l-.002-.003a68.93 68.93 0 0 1 6.543-.699c2.251 3.771 4.274 8.13 5.841 12.562 2.24 6.337 3.582 12.904 3.375 18.252-.244 6.266-1.844 11.859-4.336 16.917-1.831 3.717-4.128 7.113-6.708 10.257 4.181 4.903 7.89 10.27 10.665 16.25 2.961 6.379 4.859 13.434 5.148 21.34.248 6.76-1.352 15.07-4.025 23.098-2.275 6.834-5.354 13.523-8.744 18.918zm-2.621-7.254c2.185-4.107 4.161-8.76 5.744-13.514 2.467-7.408 3.947-14.99 3.727-21.041-.26-7.078-1.955-13.381-4.596-19.07-2.482-5.35-5.8-10.181-9.552-14.619h-7.607v66.064a61.11 61.11 0 0 0 12.284 2.18zM78.766 83.766h5.621c3.018-3.384 5.676-7.044 7.652-11.057 2.133-4.328 3.502-9.124 3.711-14.512.179-4.616-1.024-10.411-3.028-16.078a68.873 68.873 0 0 0-2.946-7.065 60.143 60.143 0 0 0-11.01 2.194v46.518zm37.068 78.517V46.315l15.068 22.334v87.091a85.983 85.983 0 0 0 7.191-4.762V41.617a133.142 133.142 0 0 0-7.191-4.935v16.879L115.07 30.022a77.693 77.693 0 0 0-6.771-1.488v135.623c2.513-.507 5.025-1.108 7.535-1.874zm40.625-78.771a62.915 62.915 0 0 0-3.295-11.103v62.913a65.592 65.592 0 0 1-7.193 8.77V59.396a58.158 58.158 0 0 0-4.793-5.75V44.11c11.254 9.661 19.371 22.879 22.582 37.878l-7.301 1.524z"/></g></svg>',
        title:"ABNT",
        text:"Nossa adesão ao padrão ABNT 14913 garante aos nossos clientes e instaladores uma experiência tranquila e uma instalação descomplicada.",
        svg:true
    },
    {
        icon:"ph:projector-screen-fill",
        title:"Projetos",
        text:'<p class="mb-2">Estamos prontos para contribuir e apoiar projetos que atendam às necessidades específicas do mercado, trabalhando em colaboração com nossos distribuidores, com foco especial em inteligência artificial, segurança eletrônica e energias renováveis.</p><p>Agende uma reunião com nossa equipe comercial através do chat online ou preenchendo o formulário disponível.</p>',
        svg:false
    }
]

</script>

<style scoped>

.box{
    @apply bg-[#f7f8fb] rounded-lg py-5 px-4
}
.box .icon{
    @apply inline-flex w-[40px] h-[40px] items-center justify-center
}
.box .icon > svg{
    @apply w-[40px] h-[40px]
}
.box .title{
    @apply text-2xl md:text-4xl
}
.box .text{
    @apply text-sm
}
</style>