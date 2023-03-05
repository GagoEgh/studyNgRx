import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerAction } from '../store/actions/register.action';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  hide = true;

  constructor(
    private _fb: FormBuilder,
    private _store:Store
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.registerForm = this._fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required,Validators.email]],
        password: ['', [Validators.required]]
      }

    )
  }

  getErrorMessage(controlName: string, errore: string) {

    return this.registerForm.get(controlName)?.hasError(errore)
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this._store.dispatch(registerAction(this.registerForm.value))
    
  }
}
