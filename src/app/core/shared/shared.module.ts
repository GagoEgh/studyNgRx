import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErroreComponent } from './backend-errore/backend-errore.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParesTokenService } from './parseToken.serviece';



@NgModule({
  declarations: [
    BackendErroreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BackendErroreComponent
  ],
  providers:[ParesTokenService]
})
export class SharedModule { }
