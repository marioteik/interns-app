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

  constructor() { }

  ngOnInit() {
   
  }

}
