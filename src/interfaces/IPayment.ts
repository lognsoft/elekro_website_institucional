import type { ObjectForm } from "~/core/types";

export default interface Payment {
    fullName:ObjectForm;
    email:ObjectForm;
    confirmEmail:ObjectForm;
    paymentType:ObjectForm;
}