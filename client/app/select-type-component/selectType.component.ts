import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-type',
  templateUrl: './selectType.component.html',
  styleUrls: ['./selectType.component.css']
})
export class SelectTypeComponent implements OnInit {

  comp: string;

  ngOnInit() {
   this.comp = 'asdf';
  }

}
