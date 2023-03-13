import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store, } from '@ngrx/store';
import { Observable, } from 'rxjs';
import { registerAction } from '../store/action';
import { IRegisterRequest } from '../modele';
import { backendErroreSelector, isSubmitingSelector } from '../store/selector/aut.selector';
import { IBakendErrore } from 'src/app/core/shared/model/bakandErrore.interface';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;
  registerForm!: FormGroup;
  isSubmit$ = new Observable<boolean>();
  backendErrore$ = new Observable<IBakendErrore|null>();


  constructor(
    private _fb: FormBuilder,
    private _store: Store,

  ) { }


  
  ngOnInit(): void {
    this.initForm();
    this.initSelector()

  }

  initSelector(){
    this.isSubmit$ = this._store.pipe(select(isSubmitingSelector));
    this.backendErrore$ = this._store.pipe(select(backendErroreSelector));
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
    this._store.dispatch(registerAction({ request }));
  }
}


