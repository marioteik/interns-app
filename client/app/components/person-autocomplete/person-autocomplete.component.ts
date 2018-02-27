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
  mock = PESSOAS;
  escolhidos: String[] = [];
  ngOnInit(): void {
    this.carregaMock();
  }

  pessoas: String[] = [];
  carregaMock() {
    for(let i = 0; i<this.mock.length; i++) {
      this.pessoas.push(this.mock[i]);
    }  
    this.pessoas.sort();
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

  private existeEmPessoas(p: String): boolean {
    for(let i = 0; i<this.pessoas.length ; i++) {
      if(this.pessoas[i] === p) {
        return true;
      }
    }

    return false;
  }

  addPessoa() {
    
    console.log("entrou" + this.pessoa);
    let adiciona = true;
    for(let i = 0; i < this.escolhidos.length ; i++) {
      if(this.escolhidos[i] === this.pessoa) {
        adiciona = false;
      }
    }

    if(this.pessoa != '' && adiciona && this.existeEmPessoas(this.pessoa)){
      this.escolhidos.push(this.pessoa);
      this.apagaPessoa();
      this.pessoa = '';
    }
  }

  apagaPessoa() {
    let vetor: String[] = [];
    for(let i = 0; i < this.pessoas.length; i++){
      if(this.pessoa !== this.pessoas[i]) {
        vetor.push(this.pessoas[i]);
      }
    }

    this.pessoas = vetor;

  }

  apagaEscolhido(e) {
    let array: String[] = [];
    for(let i = 0; i < this.escolhidos.length; i++){
      if(e !== this.escolhidos[i]) {
        array.push(this.escolhidos[i]);
      }
    }

    this.escolhidos = array;
    this.devolveEscolhido(e);
  }

  devolveEscolhido(e) {
    this.pessoas.push(e);
    this.pessoas.sort();
  }

}
