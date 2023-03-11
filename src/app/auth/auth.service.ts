import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICurrentUser } from '../core/shared/model/currentUser.interface';
import { IRegisterRequest } from './modele';
import { IAuthResponse } from './modele/authResponse.interface';



@Injectable()
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }

  register(body: IRegisterRequest): Observable<ICurrentUser> {
    return this._http.post<IAuthResponse>('/users', body)
      .pipe(map((request: IAuthResponse) => request.user))  
  }

}
