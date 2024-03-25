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
    email:string | undefined,
    empresa:string | undefined,
    cnpj:string | undefined,
    phone:string | undefined,
    fixedPhone:string | undefined,
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