import type IRouter from "./interfaces/IRouter"
import type ISocialMidia from "./interfaces/ISocialMidia";
import type ISlide from "./interfaces/ISlide";

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

export const slide:ISlide[] = [
    {
        bg: "bg-[url('https://png.pngtree.com/thumb_back/fw800/background/20230516/pngtree-path-through-the-forest-wallpaper-image_2563082.jpg')]",
        description: "Lorem Ipsum",
    },
    {
        bg: "bg-[url('https://i.pinimg.com/736x/cf/4a/e0/cf4ae0329ed839caea7fe5b8b140a3be.jpg')]",
        description: "Lorem Ipsum",
    },
    {
        bg: "bg-[url('https://wallpapercave.com/wp/wp3219866.jpg')]",
        description: "Lorem Ipsum",
    },
    {
        bg: "bg-[url('https://i.pinimg.com/originals/29/0c/5f/290c5f8f678d2d264590a483acf05673.jpg')]",
        description: "Lorem Ipsum",
    },
    {
        bg: "bg-[url('https://e0.pxfuel.com/wallpapers/950/811/desktop-wallpaper-o-caminho-atraves-do-floresta-widescreen.jpg')]",
        description: "Lorem Ipsum",
    }
    
]

