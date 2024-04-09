export type Info = {
    icon:string;
    title: string;
    text: string;
    svg:boolean;
}
export type Feature = {
    icon:string;
    text:string;
    svg:boolean;
}

export type ObjSlide = {
    img:string,
    text:string,
}

export type ObjectForm = {
    message:string,
    validate:boolean
    value:string
}


//formulários
export type Option = {
    option:string,
    value:string | number,
}
export type Form = {
    nome:string | undefined,
    email:string | undefined,
    empresa:string | undefined,
    phone:string | undefined,
    fixedPhone:string | undefined,
    cpf_cnpj:string | undefined,
    setor:string | undefined
    cep:string | undefined,
    pais:string | undefined,
    cidade:string | undefined,
    estado:string | undefined
    subject:string | undefined,
    message:string | undefined,
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

//fim formulários

export type Capacidade = {
    icon:string;
    title:string;
    text:string | Array<string>;
}

export type InputForm = {
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