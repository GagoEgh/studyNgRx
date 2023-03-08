import { createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../../types/authState.interface";
import { registerAction } from "../actions/register.action";

const authState: AuthStateInterface = {
    isSubmitting: false
}

export const authReducer = createReducer(
    authState,
    on(registerAction,
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true
        }))
)