
import { createReducer, on } from "@ngrx/store";
import { IIsSubmiting } from "../..";
import { registerAction, registerFailureAction, registerSuccessAction } from "../action";

export const isSubmitState: IIsSubmiting = {
    isSubmit: false,
    user:null,
    isLogedIn:null,
    errore:null
}

export const authReducer = createReducer(
    isSubmitState,
    on(
        registerAction,
        (state): IIsSubmiting => ({
            ...state,
            isSubmit: true,
            errore:null
        })
    ),
    on(
        registerSuccessAction,
        (state,action): IIsSubmiting => ({
            ...state,
            isSubmit: false,
            isLogedIn:true,
            user:action.user
        })
    ),
    on(
        registerFailureAction,
        (state,action): IIsSubmiting => ({
            ...state,
            isSubmit: false,
            errore:action.errore
        })
    )
)