export type Banner = {
    title:string,
    text:string,
    src:string,
    position:"center"|"left"|"right"
}

export type Route = {
    path:string;
    pathName:string;
}
export type Midia = {
    title: string;
    icon: string;
    href: string;
}
export type Info = {
    img:string;
    title: string;
    text: string | Array<string>;
}
export type Feature = {
    icon:string;
    text:string;
    svg:boolean;
}

export type Slide = {
    img:string,
    text:string,
}


//formulários
export type Option = {
    option:string,
    value:string | number,
}
export type Form = {
    nome:string;
    email:string;
    razaoSocial:string;
    requiredPhone:string;
    phone:string;
    cnpj:string;
    setor:string;
    cep:string;
    province:string;
    city:string;
    subject:string;
    message:string;
}

export type Country = {
    continent:string,
    capital:string,
    languages:string,
    geonameId:number,
    south:number,
    isoAlpha3:string,
    north:number,
    fipsCode:string,
    population:string,
    east:number,
    isoNumeric:string,
    areaInSqKm:string,
    countryCode:string,
    west:number,
    countryName:string,
    postalCodeFormat:string,
    continentName:string,
    currencyCode:string
}
export type Province = {
    id:number,
    sigla:string,
    nome:string,
    regiao: {
        id:number,
        sigla:string,
        nome:string
    }
}
export type City = {
    id:number,
    nome:string,
    microrregiao: {
        id:number,
        nome:string,
        mesorregiao: {
            id:number,
            nome:string,
            UF: {
                id:number,
                sigla:string,
                nome:string,
                regiao: {
                    id:number,
                    sigla:string,
                    nome:string
                }
            }
        }
    },
    'regiao-imediata': {
        id:number,
        nome:string,
        'regiao-intermediaria': {
            id:number,
            nome:string,
            UF: {
                id:number,
                sigla:string,
                nome:string,
                regiao: {
                    id:number,
                    sigla:string,
                    nome:string
                }
            }
        }
    }
}
export type GeoNames<T> = {
    geonames:Array<T>;
}
export type FormStateData = {
    Assunto:string | undefined,
    Nome:string | undefined,
    Email:string | undefined,
    'Razão_Social':string | undefined,
    Telefone:string | undefined,
    Telefone_fixo:string | undefined,
    'CNPJ':string | undefined,
    Setor:string | undefined,
    CEP:string | undefined,
    Mensagem:string | undefined,
    Cidade:string | undefined,
    Estado:string | undefined,
}

//fim formulários

export type Capacidade = {
    icon:string;
    title:string;
    text:string | Array<string>;
}

export type InputForm = {
    label:string;
    ico:string;
    id:string;
    name:string;
    placeholder:string;
    value:string;
    maxLength:number | null;
    minLength:number;
    type:string;
    required:boolean;
    disabled:boolean;
    modelValue:string;
}

export type Link = {
    sub:string,
    store:string,
    icon:string,
    href:string,
}

export type Box = {
    title:string,
    text:string,
    img:string,
    inverse:boolean
}
export type Recurso = {
    title: string,
    text: string
}
export type MyLink = {
    href: string;
    reverse: boolean;
}

//interfaces updates

//Requests
export interface IGeneric {
    count: number;
    name: string;
    slug: string;
}

export interface IPost{
    id: number;
    views: 0;
    title: string;
    slug: string;
    excerpt: string;
    thumbnail: string;
    categories: IGeneric[];
    tags: IGeneric[];
}

export interface IBlog {
    total_pages:number;
    posts:IPost[]
}

export interface IArticle extends IPost{
    content: string;
}
