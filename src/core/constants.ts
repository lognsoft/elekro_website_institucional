import type {
    Info,
    Feature,
    Box,
    Recurso,
    Capacidade,
    Route,
    Midia,
    Slide
} from "~/core/types";

export const slide:ReadonlyArray<Slide> = [
    {
        img:'bm-slide/bg1.jpg',
        text: 'Proteção<br/>e Elegância'
    },
    {
        img:'bm-slide/bg2.png',
        text:'Conexão<br/>sob Medida'
    },
];

export const rotas:ReadonlyArray<Route> = [
    {
        path: "/",
        pathName: "Home",
    },
    {
        path: "/colecao-signature",
        pathName: "Coleção Signature",
    },
    {
        path: "/autorizado",
        pathName: "Seja um autorizado",
    },
    {
        path: "/sobre",
        pathName: "Sobre a Elekro",
    },
    {
        path: "/insights",
        pathName: "Insights",
    },
    {
        path: "https://www.elekrobrasil.com.br/produtos/fechadura-digital-wi-fi-elekro/",
        pathName: "Comprar"
    }

];

export const midiasSociais:ReadonlyArray<Midia> = [
    {
        title: "instagram",
        icon: "ri:instagram-fill",
        href: "javascript:void(0)"
    },
    {
        title: "facebook",
        icon: 'ri:facebook-fill',
        href: "javascript:void(0)"
    },
    {
        title: "whatsapp",
        icon: "ri:whatsapp-fill",
        href: "javascript:void(0)"
    },
    {
        title: "twitter",
        icon: "pajamas:twitter",
        href: "javascript:void(0)"
    }
]

//página autorizado
export const infos:ReadonlyArray<Info> = [
    {
        img:'/images/autorizado/futuro-elekro.jpeg',
        title: 'Explore os benefícios exclusivos e diferenciais da Elekro',
        text: 'Como parceiro Elekro, você terá acesso a condições comerciais vantajosas. Nosso objetivo é fortalecer sua posição no mercado, fornecendo todas as ferramentas necessárias para crescer e prosperar.',
    },
    {
        img:'/images/autorizado/parceria-estrategica.jpg',
        title: 'Parceria estratégica',
        text: 'Posicionamos o consumidor no centro de todas as nossas decisões e buscamos parceiros que compartilhem dessa missão conosco.',
    },
    {
        img:'/images/autorizado/analise-de-credito.jpg',
        title:'Avaliação de Crédito Personalizada',
        text:'Oferecemos condições especiais de prazo de pagamento para parceiros estratégicos da Elekro.',
    },
    {
        img:'/images/autorizado/entrega-eficiente.png',
        title:'Entrega eficiente',
        text:'Em até duas semanas após a aprovação do pedido.',
    },
    {
        img:'/images/autorizado/suporte-tecnico.png',
        title:'Tecnologia de ponta',
        text:'Os autorizados têm acesso ao programa de capacitação de equipe de vendas, realizado trimestralmente, e suporte técnico local.',
    },
    {
        img:'/images/autorizado/capilaridade.jpeg',
        title:"Capilaridade e Rede de instaladores",
        text:'Operamos de norte a sul do Brasil empenhados em capacitar instaladores em cada cidade do país.',
    },
    {
        img:'/images/autorizado/inovacoes-elekro.png',
        title:"Participação nas inovações da Elekro",
        text:"Implementamos suas sugestões de melhorias em conjunto com nossa equipe de P&D.",
    },
    {
        img:'/images/autorizado/roadmap.png',
        title:"Roadmap",
        text:"Entramos em contato com nossos autorizados semestralmente para alinhar o plano estratégico de produtos, que antecipam as tendências de mercado.",
    },
    {
        img:'/images/autorizado/conformidade.png',
        title:"Conformidade",
        text:"Seguimos rigorosamente todos os padrões estabelecidos pela Anatel, assegurando qualidade e conformidade conforme a lei nº 9.472.",
    },
    {
        img:'/images/autorizado/marketing.png',
        title:"Marketing e Promoção",
        text:"Oferecemos os materiais de apoio de marketing, ajudando a impulsionar a visibilidade da marca em sua loja.",
    },
]


// 1.	Ideal para áreas externas: faça chuva ou sol, sua durabilidade está garantida com proteção reforçada IP66
// 2.	Campainha digital: atenda e libere a entrada de qualquer lugar
// 3.	Chega de chaves: use o APP, senha, biometria ou chaveiro tag para acessar
// 4.	Segurança em dobro: com verificação em duas etapas
// 5.	Teclado fosco em tom carbono: resistente a marcas de digitais
// 6.	Compartilhe senhas temporárias: para visitantes sem expor sua senha real
// 7.	Trava de privacidade: para maior segurança
// 8.	Abra sua porta em segundos: com biometria de alta precisão
// 9.	Processador de alto desempenho: para respostas rápidas e confiáveis
// 10.	Esqueça os gateways: sem necessidade de dispositivos adicionais, com Wi-Fi integrado
// 11.	Modo silencioso: para maior comodidade
// 12.	Menu guiado por áudio em português: para configuração prática e intuitiva
// 13.	Maçaneta reversível: escolha o lado direito ou esquerdo da porta
// 14.	Cadastre até 200 acessos personalizados: (biometria e senhas)
// 15.	Chave mecânica: para uso em caso de falta de bateria nas pilhas
// 16.	Energize a fechadura: via entrada USB-C em caso de falta de bateria nas pilhas
// 17.	Fácil de instalar e configurar: compatível com portas de espessura entre 35 e 85 mm, padrão ABNT


// 18.	Certificação Anatel: garantindo qualidade e confiabilidade

//página home
export const features:ReadonlyArray<Feature> = [
    {
        icon:'fa6-solid:cloud-showers-water',
        text:'Ideal para áreas externas: faça chuva ou sol, sua durabilidade está garantida com proteção reforçada IP66.',
        svg:false,
    },
    {
        icon:'fa:bell',
        text:'Campainha digital: atenda e libere a entrada de qualquer lugar.',
        svg:false
    },
    {
        icon:'fluent:phone-tablet-20-filled',
        text:'Chega de chaves: use o APP, senha, biometria ou chaveiro tag para acessar.',
        svg:false
    },
    {
        icon:'fa:shield',
        text:'Segurança em dobro: com verificação em duas etapas.',
        svg:false
    },
    {
        icon:'fa-solid:keyboard',
        text:'Teclado fosco em tom carbono: resistente a marcas de digitais.',
        svg:false
    },
    {
        icon:'teenyicons:password-solid',
        text:'Compartilhe senhas temporárias: para visitantes sem expor sua senha real.',
        svg:false,
    },
    {
        icon:'mdi:shield-lock',
        text:'Trava de privacidade: para maior segurança.',
        svg:false
    },
    {
        icon:'fa-solid:fingerprint',
        text:'Abra sua porta em segundos: com biometria de alta precisão.',
        svg:false
    },
    {
        icon:'basil:processor-solid',
        text:'Processador de alto desempenho: para respostas rápidas e confiáveis.',
        svg:false
    },
    {
        icon:'fa:wifi',
        text:'Esqueça os gateways: sem necessidade de dispositivos adicionais, com Wi-Fi integrado.',
        svg:false
    },
    {
        icon:'mingcute:volume-mute-fill',
        text:'Modo silencioso: para maior comodidade.',
        svg:false
    },
    {
        icon:'game-icons:door-handle',
        text:'Maçaneta reversível: escolha o lado direito ou esquerdo da porta.',
        svg:false
    },
    {
        icon:'teenyicons:password-solid',
        text:'Cadastre até 200 acessos personalizados: (biometria e senhas).',
        svg:false
    },
    {
        icon:'fa-solid:key',
        text:'Chave mecânica: para uso em caso de falta de bateria nas pilhas.',
        svg:false
    },
    {
        icon:'bi:usb-c-fill',
        text:'Energize a fechadura: via entrada USB-C em caso de falta de bateria nas pilhas.',
        svg:false
    },
    {
        icon:'ri:contract-fill',
        text:'Fácil de instalar e configurar: compatível com portas de espessura entre 35 e 85 mm, padrão ABNT.',
        svg:false
    },
    // Nova ordem ^


    {
        icon:'<svg height="30" width="30" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 192.756 192.756"><path d="M64.363 133.648c-17.218 0-31.24-14.021-31.24-31.191 0-17.218 14.022-31.239 31.24-31.239 17.17 0 31.192 14.021 31.192 31.239 0 17.17-14.022 31.191-31.192 31.191z" fill-rule="evenodd" clip-rule="evenodd"/><path d="M154.696 133.744c18.22-42.543 14.213-85.086-12.258-102.256-25.135-16.311-62.766-5.056-93.386 24.896 20.031-15.405 42.686-19.555 56.519-8.394 17.646 14.164 13.83 48.123-8.586 75.833-2.91 3.576-6.057 6.914-9.253 10.064l66.964-.143z" fill-rule="evenodd" clip-rule="evenodd"/></svg>',
        text:'Certificação Anatel: garantindo qualidade e confiabilidade.',
        svg:true
    },
    // {
    //     icon:'game-icons:metal-bar',
    //     text:'Alumínio - Tratamento anticorrosivo',
    //     svg:false
    // },
    // {
    //     icon:'ic:sharp-do-disturb-on',
    //     text:'Modo não perturbe',
    //     svg:false,
    // },
    // {
    //     icon:'material-symbols:notifications-unread-rounded',
    //     text:'Notificação em tempo real',
    //     svg:false,
    // },
    // {
    //     icon:'mdi:card',
    //     text:'Acesso através de tag',
    //     svg:false
    // },
    // {
    //     icon:'game-icons:battery-100',
    //     text:'Alimentação via pilhas AA',
    //     svg:false
    // },
    
]

//página elekro one+
export const texts:ReadonlyArray<Box> = [
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
export const recursos:ReadonlyArray<Recurso> = [
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
        text: '4 Pilhas AA',
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
export const capacidades:ReadonlyArray<Capacidade> = [
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
        title:'Construção em Liga de Alumínio e Proteção IP66',
        text:'Resistente à corrosão, água e poeira, ideal para as condições climáticas do Brasil.'
    }
];
export const praticidades:ReadonlyArray<Capacidade> = [
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


