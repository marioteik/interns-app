import { Component, OnInit, Input, Output } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PARA } from '../../list.mock';
// import { WbsComponent } from '../wbs/wbs.component'
import { fields } from '../../fields';
import { ValorComponent } from '../valor/valor.component';
import { NotaComponent } from '../nota/nota.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // WbsComponent,
    PARA,
    fields,
    ValorComponent,
    NotaComponent,
  ],
  providers: [],
})


export class ListaComponent implements OnInit {

  valor: String;

  onValueInserted(message: String): void{
     this.valor = message;
  }

  @Output() teste: fields[] = [
    
  ];
    
  j: number = 1;

  @Input() 
  
  public addItem(num: number, tipo: string): void{
    for(let i = 0; i < num; i++){
      this.teste.push(
        new fields(this.j, tipo, )
      )
      this.j ++;
    } 
  }

  constructor() { 
  }

  ngOnInit() {
  }

}
