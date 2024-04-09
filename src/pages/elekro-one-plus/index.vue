<template>
    <!-- <Body class="bg-black text-white"/> -->
    <Head>
        <Title>Elekro One Plus</Title>
    </Head>
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
                    <h1 class="text-[40px] md:text-[50px] max-w-96 mb-[20px] font-semibold">Elekro One+ série FM-F31</h1>
                    <p class="max-w-[500px] mb-2">Com a Elekro, você tem acesso conveniente à sua casa sem precisar de chaves. Seja através de impressão digital, cartão de acesso, senha ou aplicativo.</p>
                    <p class="max-w-[500px] mb-[20px]">Aprimore sua rotina e garanta sua segurança.</p>
                    <MyLink class="ml-0" href="javascript:void(0)">Ver mais</MyLink>
                </div>
            </div>
        </section>
        <section class="pt-[100px] text-[#333]">
            <div class="container w-full max-w-[1380px] mx-auto px-3">
                <h2 class="mb-[40px] text-center font-bold text-xl md:text-4xl">Ideal para</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-3 mb-[50px]">
                    <template v-for="obj,index in capacidades" :key="index">
                        <div class="px-10 py-3">
                            <div class="text-3xl text-[#333]">
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
        <section class="pt-[100px] text-[#333]">
            <div class="container w-full max-w-[1380px] mx-auto px-3">
                <h2 class="mb-[40px] text-center font-bold text-xl md:text-4xl">Praticidade</h2>
                <div class="grid md:grid-cols-2 gap-x-9 gap-y-3 mb-[50px] mb-2">
                    <template v-for="obj,index in praticidades" :key="index">
                        <div class="px-10 py-3">
                            <div class="text-3xl text-[#333]">
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
        <section class="pt-[100px] text-[#333]">
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
import type { Box, Recurso, Capacidade } from "~/types";

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
const capacidades:ReadonlyArray<Capacidade> = [
    {
        icon:'simple-icons:airbnb',
        title:'Airbnb e Locações por Temporada ',
        text:'Ofereça uma experiência de check-in e check-out sem complicações para seus hóspedes, com a possibilidade de criação de senhas com data de entrada e saída, melhore o gerenciamento dos hóspedes, eficiência operacional e a satisfação dos clientes.'
    },
    {
        icon:'material-symbols:real-estate-agent',
        title:'Imobiliárias',
        text:'Utilizando a função da senha dinâmica ou programada, dê acesso a imobiliária de forma rápida e fácil, sem expor sua senha pessoal.'
    },
    {
        icon: 'mdi:company',
        title:'Empresas',
        text:[
            'Garanta a segurança de sua empresa, com o controle e gerenciamento de acesso dos colaboradores a areas restritas, com a gestão de quem/quando/horário acessou o local.',
            'Inclua e exclua acessos de forma rápida via celular ou tablet.',
            'Cadastre até 100 biometrias, e até 100 senhas numérica.',
            'Elimine a necessidade de fazer chaves e realizar troca de miolos.'
        ]
    },
    {
        icon:'mingcute:volume-mute-fill',
        title:'Modo Silencioso e ajuste de volume',
        text:'Utilize a fechadura sem gerar qualquer ruído, proporcionando conforto e discrição.'
    },
    {
        icon:'clarity:design-solid',
        title:'Design funcional',
        text:'Facilmente adaptada para abrir tanto para o lado esquerdo quanto para o lado direito.'
    },
    {
        icon:'ri:admin-fill',
        title:'Modo Privacidade',
        text:'Somente o administrador terá acesso de abertura da fechadura.'
    },
    {
        icon:'game-icons:door-handle',
        title:'Elegância e versatilidade de Instalação ',
        text:'Design sofisticado, fechadura com altura e espessura de 275 por 65 (mm). Mortise, padrão nacional, simplificando sua instalação.'
    },
    {
        icon:'bi:unlock-fill',
        title:'Modo Acesso Livre',
        text:'Mantenha a porta desbloqueada continuamente, ideal para eventos especiais e situações que exigem grande acesso de visitantes no local.'
    },
    {
        icon:'game-icons:metal-bar',
        title:'Construção em Liga de Alumínio e Proteção IP56',
        text:'Resistente à corrosão, água e poeira, ideal para as condições climáticas do Brasil.'
    }
];
const praticidades:ReadonlyArray<Capacidade> = [
    {
        icon:'ion:home',
        title:'Mudou de casa?',
        text:'A fechadura poderá ser resetada e o novo comprador poderá usufruir da segurança Elekro.'
    },
    {
        icon:'mdi:battery-off',
        title:'A bateria acabou?',
        text:'Conte com o alarme de baixo nível de bateria e troque as pilhas com antecedência. Se os alarmes da fechadura não forem vistos, conte com a chave mestra para abertura da fechadura, ou utilize nossa porta USB C para energizar a fechadura, inserir sua senha/ biometria para ter acesso.'
    }
]

</script>