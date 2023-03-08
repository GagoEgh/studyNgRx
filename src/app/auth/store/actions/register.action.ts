import { createAction, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../..";
import { RegisterActionTypes } from "./registerAction.type";

export const registerAction = createAction(
    RegisterActionTypes.REGISTER,
    props<RegisterRequestInterface>()
)