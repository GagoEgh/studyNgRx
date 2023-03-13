import { IBakendErrore } from "src/app/core/shared/model/bakandErrore.interface";
import { ICurrentUser } from "src/app/core/shared/model/currentUser.interface";

export interface IIsSubmiting{
    isSubmit:boolean,
    user:ICurrentUser|null,
    isLogedIn:boolean|null,
    errore:IBakendErrore|null
}