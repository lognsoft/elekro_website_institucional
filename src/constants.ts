import type IRouter from "./interfaces/IRouter"
import type ISocialMidia from "./interfaces/ISocialMidia";

export const rotas:IRouter[] = [
    {
        path: "/",
        pathName: "Home",
    },
    {
        path: "/sobre",
        pathName: "Sobre",
    },
    {
        path: "/contato",
        pathName: "Contato",
    },
    {
        path: "/shop",
        pathName: "Loja",
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

