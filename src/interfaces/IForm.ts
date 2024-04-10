import type { ObjectForm } from "~/core/types";

export default interface Form{
    [name:string]:ObjectForm;
    telefone:ObjectForm;
    email:ObjectForm;
    message:ObjectForm;
}