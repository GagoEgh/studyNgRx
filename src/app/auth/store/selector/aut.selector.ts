import { createSelector,createFeatureSelector } from "@ngrx/store";
import { IIsSubmiting } from "../../modele";


export const authFuture= createFeatureSelector<IIsSubmiting>('auth')

export const isSubmitingSelector = createSelector(
    authFuture,
    (state: IIsSubmiting) => state.isSubmit
)

export const backendErroreSelector = createSelector(
    authFuture,
    (state: IIsSubmiting) => state.errore
)