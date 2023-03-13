import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, take, tap } from "rxjs";
import { ICurrentUser } from "src/app/core/shared/model/currentUser.interface";
import { ParesTokenService } from "src/app/core/shared/parseToken.serviece";
import { AuthService } from "../../auth.service";
import { registerAction, registerFailureAction, registerSuccessAction } from "../action";

@Injectable()
export class RegisterEffects {

    constructor(
        private _authService: AuthService,
        private _actions$: Actions,
        private _paresTokenService: ParesTokenService,
        private _router: Router
    ) { }

    register$ = createEffect(
        () => this._actions$
            .pipe(
                ofType(registerAction),
                switchMap(({ request }) => {
                    return this._authService.register(request)
                        .pipe(map((user: ICurrentUser) => {
                            this._paresTokenService.setToken("authToken", user.token)
                            return registerSuccessAction({ user })
                        }),
                            catchError((httpErrore: HttpErrorResponse) => {
                                return of(registerFailureAction({ errore: httpErrore.error.errors }))
                            })
                        )
                }),
            ))


    home$ = createEffect(
       
        () => this._actions$.pipe(
            ofType(registerSuccessAction),
            tap(() => {
                this._router.navigateByUrl('home')
            })),
        {
            dispatch: false,
        }
    )
}