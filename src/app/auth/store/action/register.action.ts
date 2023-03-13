import { createAction, props } from '@ngrx/store';
import { IBakendErrore } from 'src/app/core/shared/model/bakandErrore.interface';
import { ICurrentUser } from 'src/app/core/shared/model/currentUser.interface';
import { IRegisterRequest } from '../../modele';
import {  RegistorActionType } from './index';


export const registerAction = createAction(
    RegistorActionType.REGISTOR,
    props<{request:IRegisterRequest}>()
)

export const registerSuccessAction = createAction(
    RegistorActionType.REGISTOR_SUCCESS,
    props<{user:ICurrentUser}>()
)

export const registerFailureAction = createAction(
    RegistorActionType.REGISTOR_FAILURE,
    props<{errore:IBakendErrore}>()
    
)