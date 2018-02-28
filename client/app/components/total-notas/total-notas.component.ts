import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { HEROES} from '../../mock-heroes';


@Component({
  selector: 'app-total-notas',
  templateUrl: './total-notas.component.html',
  styleUrls: ['./total-notas.component.css']
})
export class TotalNotasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public contagem() {
    var C= HEROES.length;
    return C;

    
    
  }

  public handleTotal(){

    var soma = 0;
    //var teste = 0;
    console.log(HEROES);
    for (var i = 0; i < HEROES.length; i++) {
  
      soma = soma + HEROES[i];
    }
  console.log(soma);
  return soma;  
  };

}

