export type Info = {
    title: string;
    text: string;
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
    adminCode1:string,
    lng:string,
    geonameId:number,
    toponymName:string,
    countryId:string,
    fcl:string,
    population:number,
    countryCode:string,
    name:string,
    fclName:string,
    adminCodes1: {
        ISO3166_2:string
    },
    countryName: string,
    fcodeName:string,
    adminName1:string,
    lat:string,
    fcode:string
}
export type GeoNames<T> = {
    geonames:Array<T>;
}

//fim formulários

export type Link = {
    sub:string,
    store:string,
    icon:string,
    href:string,
}