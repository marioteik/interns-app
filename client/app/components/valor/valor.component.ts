import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-valor',
  templateUrl: './valor.component.html',
  styleUrls: ['./valor.component.css']
})
export class ValorComponent implements OnInit {

  values: String[];

  @Input() 

  @Output() insertValue: EventEmitter<any> = new EventEmitter<any>();


  setValue(valor:String): void{
    this.insertValue.emit(`Valor:${valor}`);

  }

  onBlurMethod(valor: String){
    for(let i = 0; i < 100; i++ ){
      this.values[i] = valor;
      console.log(valor); 
    }
  }
  

  constructor() { }

  ngOnInit() {
   
  }

}
