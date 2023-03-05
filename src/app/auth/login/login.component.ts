import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  hide = true;

  constructor(
    private _fb: FormBuilder
  ) { }
  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.loginForm = this._fb.group(
      {
        email: ['', [Validators.required,Validators.email]],
        password: ['', [Validators.required]]
      }

    )
  }

  getErrorMessage(controlName: string, errore: string) {

    return this.loginForm.get(controlName)?.hasError(errore)
  }

  onSubmit() {
    console.log(this.loginForm)
  }
}
