import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PARA } from '../../list.mock';
// import { WbsComponent } from '../wbs/wbs.component'
import { fields } from '../../fields';
import { ValorComponent } from '../valor/valor.component';
import { NotaComponent } from '../nota/nota.component';
import { ServiceTestService } from '../../service-test.service';

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

  static addItem(): any {
    throw new Error("Method not implemented.");
  }
  valor: String;

  onValueInserted(message: String): void{
     this.valor = message;
  }


  
  constructor(private ServiceTest: ServiceTestService) { 
  }

  

  ngOnInit() {
  }

}
