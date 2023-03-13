import { Component, Input, OnInit } from '@angular/core';
import { IBakendErrore } from '../model/bakandErrore.interface';

@Component({
  selector: 'app-backend-errore',
  templateUrl: './backend-errore.component.html',
  styleUrls: ['./backend-errore.component.css']
})
export class BackendErroreComponent implements OnInit {
  @Input("backendErrore") backendErroreProps!: IBakendErrore | null;
  erroreMessages!: string[];
  constructor() { }
  
  ngOnInit(): void {
    this.erroreMessages= Object.keys(this.backendErroreProps!).map((name:string)=>{
     return `${name} ${this.backendErroreProps![name]}`
   })
  }


}
