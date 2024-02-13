import type IRouter from "./interfaces/IRouter"
import type ISocialMidia from "./interfaces/ISocialMidia";
import type { MethodPayment } from "./types";

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
        pathName: "fale conosco",
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

export const methods:MethodPayment[] = [
    {
        type: "Cartão de crédito",
        icon: "material-symbols:credit-card-outline"
    },
    {
        type: "Cartão virtual caixa",
        icon: "arcticons:caixa"
    },
    {
        type: "Pix",
        icon: "ic:baseline-pix"
    },
    {
        type: "Boleto",
        icon: "material-symbols:barcode"
    },
    {
        type: "Paypal",
        icon: "fa6-brands:paypal"
    },
];


