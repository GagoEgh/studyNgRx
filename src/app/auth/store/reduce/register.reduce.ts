
import { createReducer, on } from "@ngrx/store";
import { IIsSubmiting } from "../..";
import { RegisterAction } from "../action";

export const isSubmitState: IIsSubmiting = {
    isSubmit: false
}

export const authReducer = createReducer(
    isSubmitState,
    on(
        RegisterAction,
        (state): IIsSubmiting => ({
            ...state,
            isSubmit: true
        })
    )
)