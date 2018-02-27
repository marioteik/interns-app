import { Injectable } from '@angular/core';
import { ListaComponent } from './components/lista/lista.component';
import { SelectTypeComponent } from './components/select-type-component/select-type.component';
import { fields } from './fields';


@Injectable()
export class ServiceTestService {

  hidden = false;

  teste: fields[] = [];
    
  j: number = 1;

  public addItem(tipo: string): void{  
      this.teste.push(
        new fields(this.j, tipo)
      )
      this.j ++;
    this.hidden = true;
  }

  constructor() { }

}
