import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PESSOAS } from '../../mock-person';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-person-autocomplete',
  templateUrl: './person-autocomplete.component.html',
  styleUrls: ['./person-autocomplete.component.css']
})
export class PersonAutocompleteComponent implements OnInit {
  pessoas = PESSOAS;
  escolhidos: String[] = [];
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  pessoa = '';

  escolhePessoa(p) {
    this.pessoa = p;
    this.mudaDropDown();
  }

  mostrarDropDown = false;
  mudaDropDown() {
    this.mostrarDropDown = !this.mostrarDropDown;
  }

  addPessoa() {
    
    console.log("entrou" + this.pessoa);
    let adiciona = true;
    for(let i = 0; i < this.escolhidos.length ; i++) {
      if(this.escolhidos[i] === this.pessoa) {
        adiciona = false;
      }
    }

    if(this.pessoa != '' && adiciona){
      this.escolhidos.push(this.pessoa);
      this.pessoa = '';
    }
  }

  apagaEscolhido(e) {
    let array: String[] = [];
    for(let i = 0; i < this.escolhidos.length; i++){
      if(e !== this.escolhidos[i]) {
        array.push(this.escolhidos[i]);
      }
    }

    this.escolhidos = array;
  }
n
}
