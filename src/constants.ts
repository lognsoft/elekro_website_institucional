import type IRouter from "./interfaces/IRouter"
import type ISocialMidia from "./interfaces/ISocialMidia";

//apenas temporario
import type IProduct from '~/interfaces/IProduct';

export const rotas:IRouter[] = [
    {
        path: "/",
        pathName: "Home",
    },
    {
        path: "/produtos",
        pathName: "Produtos",
    },
    {
        path: "/sobre",
        pathName: "Sobre",
    },
    {
        path: "/contato",
        pathName: "Contato",
    }
];

export const midiasSociais:ISocialMidia[] = [
    {
        title: "Instagram",
        icon: "ri:instagram-fill",
        href: "javascript:void(0)"
    },
    {
        title: "facebook",
        icon: 'ri:facebook-fill',
        href: "javascript:void(0)"
    },
    {
        title: "Whatsapp",
        icon: "ri:whatsapp-fill",
        href: "javascript:void(0)"
    },
    {
        title: "Twitter",
        icon: "pajamas:twitter",
        href: "javascript:void(0)"
    }
]

//temporarios
export const produtos:IProduct[] = [
    {
        id:1,
        slug: "produto-lorem-1",
        title: "Produto Lorem 1",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex saepe quam commodi voluptatem in assumenda officia recusandae. Fugit tempora aliquam voluptate, iusto voluptatum animi vel asperiores incidunt optio laborum libero?",
        value: 50.6,
        image: "https://media.moneytimes.com.br/uploads/2022/03/shutterstock-1863024973.jpg"
    },
    {
        id:2,
        slug: "produto-lorem-2",
        title: "Produto Lorem 2",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex saepe quam commodi voluptatem in assumenda officia recusandae. Fugit tempora aliquam voluptate, iusto voluptatum animi vel asperiores incidunt optio laborum libero?",
        value: 50.6,
        image: "https://media.moneytimes.com.br/uploads/2022/03/shutterstock-1863024973.jpg"
    },
    {
        id:3,
        slug: "produto-lorem-3",
        title: "Produto Lorem 3",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex saepe quam commodi voluptatem in assumenda officia recusandae. Fugit tempora aliquam voluptate, iusto voluptatum animi vel asperiores incidunt optio laborum libero?",
        value: 50.6,
        image: "https://media.moneytimes.com.br/uploads/2022/03/shutterstock-1863024973.jpg"
    },
    {
        id:4,
        slug: "produto-lorem-4",
        title: "Produto Lorem 4",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex saepe quam commodi voluptatem in assumenda officia recusandae. Fugit tempora aliquam voluptate, iusto voluptatum animi vel asperiores incidunt optio laborum libero?",
        value: 50.6,
        image: "https://media.moneytimes.com.br/uploads/2022/03/shutterstock-1863024973.jpg"
    },
    {
        id:5,
        slug: "produto-lorem-5",
        title: "Produto Lorem 5",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex saepe quam commodi voluptatem in assumenda officia recusandae. Fugit tempora aliquam voluptate, iusto voluptatum animi vel asperiores incidunt optio laborum libero?",
        value: 50.6,
        image: "https://media.moneytimes.com.br/uploads/2022/03/shutterstock-1863024973.jpg"
    },
    {
        id:5,
        slug: "produto-lorem-6",
        title: "Produto Lorem 6",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex saepe quam commodi voluptatem in assumenda officia recusandae. Fugit tempora aliquam voluptate, iusto voluptatum animi vel asperiores incidunt optio laborum libero?",
        value: 332.6,
        image: "https://media.moneytimes.com.br/uploads/2022/03/shutterstock-1863024973.jpg"
    }
];

