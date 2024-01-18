import type IRouter from "./interfaces/IRouter"
import type ISocialMidia from "./interfaces/ISocialMidia";

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


