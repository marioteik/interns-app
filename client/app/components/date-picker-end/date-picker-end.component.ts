import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgModel, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-date-picker-end',
  templateUrl: './date-picker-end.component.html',
  styleUrls: ['./date-picker-end.component.css']
})
export class DatePickerEndComponent implements OnInit {
  maxDate: Date;
  minDate: Date;
  public date: Date;
  public myGroup;
  public myForm: FormGroup;

  // myForm = new FormGroup({
  //   myDate: new FormControl()
  // });

  //divToChange = document.getElementById('form-control');
  onDateSelected() {
    console.log(this.date);
    return "#e5e5e5";
  }
  // @Output() dateSend: EventEmitter<any> = new EventEmitter<any>();
  onSubmit() {
    console.log(this.myForm.value);
    //this.dateSend.emit(val);
  }

  constructor(private _fb: FormBuilder) {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate());
    this.minDate = new Date();
    this.minDate.setDate(this.minDate.getDate()-60);
  }

  ngOnInit() {

    

    this.myForm = this._fb.group({
      myDate: ['', <any>Validators.required]
    });

  }

}
