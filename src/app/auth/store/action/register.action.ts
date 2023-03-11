import { createAction, props } from '@ngrx/store';
import { IRegisterRequest } from '../../modele';
import {  RegistorActionType } from './index';


export const RegisterAction = createAction(
    RegistorActionType.REGISTOR,
    props<{request:IRegisterRequest}>()
)