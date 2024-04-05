<template>
    <!-- <Body class="bg-black text-white"/> -->
    <Head>
        <Title>Elekro One Plus</Title>
    </Head>
    <Body class="bg-[#f6f9fc]"/>
    <main class="pt-[87px]">
        <section class="grid grid-cols-1 lg:grid-cols-2 relative">
            <div class="col-span-1 hidden lg:block"></div>
            <div class="col-span-1 relative">
                <!-- <img class="absolute h-full hidden lg:block z-20" src="/images/moldura.svg" alt=""/> -->
                <div class="absolute h-full w-full bg-black/40 z-10"></div>
                <img class="max-w-full min-h-[600px] object-cover" src="https://seapromotionstatic.cdn5th.com/static/275096818692636672.jpg" alt=""/>
            </div>
            <div class="container mx-auto px-3 absolute left-[50%] translate-x-[-50%] h-full flex items-center z-30">
                <div class="w-full text-white lg:text-[#333]">
                    <h1 class="text-[40px] md:text-[50px] max-w-96 mb-[20px] font-semibold">Lorem Ipsum</h1>
                    <p class="max-w-[500px] mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis mollitia obcaecati commodi voluptatem qui quas neque laudantium sint</p>
                    <MyLink class="m-0" href="javascript:void(0)">Ver mais</MyLink>
                </div>
            </div>
        </section>
        <section class="pt-[100px] text-[#333]">
            <div class="container mx-auto px-3 max-w-[1380px]">
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
        <section class="pt-[100px] text-[#333]">
            <div class="container w-full max-w-[1250px] mx-auto px-3">
                <h2 class="mb-[40px] text-center text-bold text-xl md:text-4xl">Lorem Ipsum</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-3 mb-[50px]">
                    <template v-for="obj,index in capacidades" :key="index">
                        <div class="px-10 py-3">
                            <div class="text-3xl text-[#333]">
                                <Icon :name="obj.icon"/>
                            </div>
                            <h3 class="text-xl my-3 font-semibold">{{ obj.title }}</h3>
                            <p class="text-sm">{{ obj.text }}</p>
                            
                        </div>
                    </template>
                </div>
            </div>
        </section>
        <section class="py-[100px] text-[#333]">
            <div class="container w-full max-w-[1200px] mx-auto px-3">
                <h2 class="mb-[40px] text-center font-bold text-xl md:text-4xl">Recursos</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-[50px]">
                    <template v-for="obj,index in resursos" :key="index">
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
    </main>
</template>

<script setup lang="ts">
import type { Box, Recurso } from "~/types";

const texts:ReadonlyArray<Box> = [
    {
        title:'Controle Remoto',
        text: 'Adicionando o Gateway da Elekro, com o Smart Life, os usuários podem controlar suas fechaduras inteligentes remotamente por meio do aplicativo em seus dispositivos móveis. Isso permite destrancar portas de qualquer lugar, oferecendo conveniência e segurança adicional.',
        img: 'https://seapromotionstatic.cdn5th.com/static/275096338264477696.png',
        inverse: false
    },
    {
        title:'Acesso de Convidados',
        text: 'Crie códigos de acesso temporários para permitir que visitantes entrem em sua casa por um período específico.',
        img: 'https://seapromotionstatic.cdn5th.com/static/275096386771599360.png',
        inverse: true
    },
    {
        title:'Integração com outros dispositivos Smart Life',
        text: 'O Smart Life pode ser integrado a outros dispositivos domésticos inteligentes, como sistemas de segurança, câmeras de vigilância e dispositivos de iluminação. Isso permite automatizar tarefas e criar cenários personalizados, como acender as luzes e destrancar a porta quando o usuário se aproxima da casa.',
        img: 'https://seapromotionstatic.cdn5th.com/static/275605275468357632.png',
        inverse: false
    },
    {
        title:'Notificações de Atividade',
        text: 'O Smart Life pode enviar notificações em tempo real para o smartphone do usuário sempre que ocorrer uma atividade na fechadura inteligente, como tentativas de acesso não autorizado ou a entrada de um convidado.',
        img: 'https://seapromotionstatic.cdn5th.com/static/275096386771599360.png',
        inverse: true
    },
    {
        title:'Histórico de Acesso',
        text: 'Ele mantém um registro detalhado de todas as atividades de destravamento da fechadura, permitindo que os usuários visualizem o histórico de acesso para monitoramento e segurança.',
        img: 'https://seapromotionstatic.cdn5th.com/static/275605275468357632.png',
        inverse: false
    },
    {
        title:'Controle por Voz',
        text: 'Integrado com assistentes de voz como Amazon Alexa e Google Assistant, o Smart Life permite que os usuários controlem suas fechaduras inteligentes usando comandos de voz simples.',
        img: 'https://seapromotionstatic.cdn5th.com/static/275096386771599360.png',
        inverse: true
    },
    {
        title:'Gerenciamento de Usuários',
        text: 'Adicione ou remova usuários autorizados e gerencie suas permissões de acesso, gerencie facilmente o acesso de visitantes em cenários residenciais, sociais e comerciais.',
        img: 'https://seapromotionstatic.cdn5th.com/static/275605275468357632.png',
        inverse: false
    },
    {
        title:'Alertas de Bateria Fraca',
        text: 'O sistema Smart Life pode enviar alertas quando a bateria da fechadura inteligente estiver fraca, garantindo que os usuários saibam quando é necessário trocar a bateria para evitar interrupções no funcionamento.',
        img: 'https://seapromotionstatic.cdn5th.com/static/275096386771599360.png',
        inverse: true
    },
    {
        title:'Entrada sem chave',
        text: 'As fechaduras inteligentes oferecem acesso conveniente e sem chave à sua casa, seja por impressão digital, biometria, cartão de acesso ou senha. Nunca se preocupe em esquecer suas chaves.',
        img: 'https://seapromotionstatic.cdn5th.com/static/275605275468357632.png',
        inverse: false
    },
    {
        title:'Alertas ao vivo',
        text: 'Adicionando o Gateway da Elekro, receba alertas se as fechaduras estiverem com bateria fraca, forem violadas ou alguém tentar arrombar a fechadura.',
        img: 'https://seapromotionstatic.cdn5th.com/static/275096386771599360.png',
        inverse: true
    },
    {
        title:'Gerenciamento fácil',
        text: 'Gerencie facilmente o acesso de visitantes em cenários residenciais, sociais e comerciais.',
        img: 'https://seapromotionstatic.cdn5th.com/static/275605275468357632.png',
        inverse: false
    },
    {
        title:'Cenário',
        text: 'Conte com o aplicativo pronto pra montar todo o ecossistema inteligentes para sua casa, ao abrir a porta, sua casa recebe sua chegada: cortinas inteligentes se abrem, aparelhos elétricos e lâmpadas selecionados são ligados e a temperatura se ajusta ao ambiente desejado.',
        img: 'https://seapromotionstatic.cdn5th.com/static/275096386771599360.png',
        inverse: true
    },
    {
        title:'Criptografia Segura',
        text: 'A criptografia completa de comunicação e o chip integrado de proteção garantem a segurança da sua casa 24 horas por dia, 7 dias por semana.',
        img: 'https://seapromotionstatic.cdn5th.com/static/275605275468357632.png',
        inverse: false
    },
]

const resursos:ReadonlyArray<Recurso> = [
    {
        title:'Tamanho do Produto',
        text: '275*65mm',
    },
    {
        title:'Materiais',
        text: 'Liga de Alumínio',
    },
    {
        title:'Trinco',
        text: 'Trinco Único <b>60-70mm</b> ou Trinco Duplo <b>5050/4585/6085</b>',
    },
    {
        title:'Fonte de Alimentação',
        text: '4 Pilhas AAA',
    },
    {
        title:'Tensão de Alimentação',
        text: '4.5V-6V',
    },
    {
        title:'Capacidade de Impressões Digitais',
        text: 'Até 100 registros de digitais',
    },
    {
        title:'Capacidade de Tags',
        text: 'Até 100 registros de tag',
    },
    {
        title:'Capacidade de Senhas',
        text: 'Até 100 registros de senha',
    },
    {
        title:'Taxa de Rejeição',
        text: '＜ 0.01%',
    },
    {
        title:'Velocidade de Reconhecimento',
        text: '＜ 0.35S',
    },
    {
        title:'Espessura da Porta',
        text: '30-120mm',
    },
    {
        title:'Temperatura de Operação',
        text: '-20℃-70℃',
    },
    {
        title:'Tipo de Porta',
        text: 'Porta Antirroubo / Porta de Madeira / Porta de Aço',
    },
]

type Capacidade = {
    icon:string,
    title:string,
    text:string
}
const capacidades:ReadonlyArray<Capacidade> = [
    {
        icon:'fa-solid:fingerprint',
        title:'Lorem Ipsum',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit natus sed veniam ab inventore, quas exercitationem obcaecati distinctio iusto. Dicta eum cum distinctio error, eos totam maiores voluptatibus deserunt quod!'
    },
    {
        icon:'i-bi:file-text-fill',
        title:'Lorem Ipsum',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit natus sed veniam ab inventore, quas exercitationem obcaecati distinctio iusto. Dicta eum cum distinctio error, eos totam maiores voluptatibus deserunt quod!'
    },
    {
        icon: 'i-ion:notifications-sharp',
        title:'Lorem Ipsum',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit natus sed veniam ab inventore, quas exercitationem obcaecati distinctio iusto. Dicta eum cum distinctio error, eos totam maiores voluptatibus deserunt quod!'
    },
    {
        icon: 'i-bi:unlock-fill',
        title:'Lorem Ipsum',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit natus sed veniam ab inventore, quas exercitationem obcaecati distinctio iusto. Dicta eum cum distinctio error, eos totam maiores voluptatibus deserunt quod!'
    },
    {
        icon: 'fa-solid:key',
        title:'Lorem Ipsum',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit natus sed veniam ab inventore, quas exercitationem obcaecati distinctio iusto. Dicta eum cum distinctio error, eos totam maiores voluptatibus deserunt quod!'
    },
    {
        icon: 'fa:tag',
        title:'Lorem Ipsum',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit natus sed veniam ab inventore, quas exercitationem obcaecati distinctio iusto. Dicta eum cum distinctio error, eos totam maiores voluptatibus deserunt quod!'
    }
];

// const variation:Ref<string> = ref('preta');

// type Question = {
//     question: string,
//     open: boolean,
//     response: string
// }

// const faq:Ref<Question[]> = ref([
//     {
//         question: 'Posso instalar a Elekro em qualquer tipo de porta?',
//         open:false,
//         response: 'Sim, adequada para diversos tipos de portas com instalação profissional inclusa.'
//     },
//     {
//         question: 'Quão eficiente é o consumo de energia da Elekro?',
//         open:false,
//         response: 'Projetada para eficiência, minimiza trocas de bateria.'
//     },
//     {
//         question: 'Qual é a vida útil da Elekro em condições externas?',
//         open:false,
//         response: 'Resistente a intempéries, garante desempenho duradouro.'
//     },
//     {
//         question: 'Qual é a política da Elekro?',
//         open:false,
//         response: '1 ano de garantia e política de devoluções flexível.'
//     },
//     {
//         question: 'A Elekro recebe atualizações de software?',
//         open:false,
//         response: 'Recebe automaticamente, melhorando funcionalidades e segurança.'
//     },
//     {
//         question: 'Como acesso minha casa se a bateria acabar?',
//         open:false,
//         response: 'Use chaves físicas fornecidas ou contate suporte.'
//     },
//     {
//         question: 'Que tipo de suporte a Elekro oferece?',
//         open:false,
//         response: 'Suporte completo via telefone, e-mail e WhatsApp.'
//     },
//     {
//         question: 'Os sons da fechadura podem ser silenciados?',
//         open:false,
//         response: 'sim'
//     }
// ])

// type VariationImages = {
//     color:string,
//     images:string[],
//     picture:string
// }

// const images:Array<VariationImages> = [
//     {
//         color:'preta',
//         picture: '/images/informacoes-2.png',
//         images: [
//             'slide/slide-preto-1.jpg',
//             'slide/slide-preto-2.jpg',
//             'slide/slide-preto-3.jpg',
//             'slide/slide-preto-4.jpg',
//             'slide/slide-1.jpg'
//         ]
//     },
//     {
//         color:'prata',
//         picture: '/images/informacoes-1.png',
//         images: [
//             'slide/slide-prata-1.jpg',
//             'slide/slide-prata-2.jpg',
//             'slide/slide-prata-3.jpg',
//             'slide/slide-prata-4.jpg',
//             'slide/slide-1.jpg'
//         ]
//     }
// ]

// const alterNativeImages = computed(():string[] => {
//     let arrayImage:Array<string> = []
//     const imageVariation:VariationImages | undefined = images.find((val:VariationImages) => val.color == variation.value);

//     if(imageVariation !== undefined){
//         arrayImage = imageVariation.images;
//     }
//     return arrayImage;
// })

// const imageBanner = computed(():string => {

//     const obj:VariationImages | undefined = images.find((val:VariationImages) => val.color == variation.value);

//     return obj == undefined ? '/images/informacoes-1.png' : obj.picture;
// })

</script>

<style scoped>

/* .img-fluid{
    width: 100%;
    height: auto;
    max-width: 70rem;
}

#after-clip::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
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
} */
</style>