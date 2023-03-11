import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store, } from '@ngrx/store';
import { map, Observable, } from 'rxjs';
import { AuthService } from '../auth.service';
import { RegisterAction } from '../store/action';
import { IRegisterRequest } from '../modele';
import { isSubmitingSelector } from '../store/selector/aut.selector';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  hide = true;
  isSubmit$ = new Observable<boolean>()
  constructor(
    private _fb: FormBuilder,
    private _store: Store
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.isSubmit$ = this._store.pipe(select(isSubmitingSelector))
  
   
  }

  initForm() {
    this.registerForm = this._fb.group(
      {
        username: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      }

    )
  }

  getErrorMessage(controlName: string, errore: string) {
    return this.registerForm.get(controlName)?.hasError(errore)
  }

  onSubmit() {
    const request: IRegisterRequest = {
      user: this.registerForm.value
    }
    this._store.dispatch(RegisterAction({ request }));
    console.log('sub')
  }
}


