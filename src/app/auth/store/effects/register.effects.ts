import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { ICurrentUser } from "src/app/core/shared/model/currentUser.interface";
import { AuthService } from "../../auth.service";
import { registerAction, registerFailureAction, registerSuccessAction } from "../action";

@Injectable()
export class RegisterEffects {

    constructor(
        private _authService: AuthService,
        private _actions$: Actions
    ) { }

    register$ = createEffect(
        () => this._actions$
            .pipe(
                ofType(registerAction),
                switchMap(({ request }) => {
                    return this._authService.register(request)
                        .pipe(map((user: ICurrentUser) => {
                            return registerSuccessAction({user})
                        }),
                        catchError((httpErrore:HttpErrorResponse) => {
                            return of(registerFailureAction({errore:httpErrore.error.errors}))
                        })
                        )
                }),
                
               
            ))
}