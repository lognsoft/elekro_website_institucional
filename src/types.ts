export type FormSubmit = {
    nome:string,
    email:string,
    telefone?:string,
    mensagem:string
}

export type Info = {
    title: string;
    text: string;
}

export type ObjectForm = {
    message:string,
    validate:boolean
    value:string
}

export type MethodPayment = {
    type:string;
    icon:string;
}