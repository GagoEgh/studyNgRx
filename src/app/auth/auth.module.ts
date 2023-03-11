import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, RegisterComponent } from '.';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/reduce/register.reduce';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffects } from './store/effects/register.effects';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    StoreModule.forFeature('auth',authReducer),
    EffectsModule.forFeature([RegisterEffects])
  ],
  exports: [RouterModule],
  providers: [
    AuthService
  ],
})
export class AuthModule { }
