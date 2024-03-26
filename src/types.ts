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

//fim formulários

export type Link = {
    sub:string,
    store:string,
    icon:string,
    href:string,
}

export type Option = {
    option:string,
    value:string,
}