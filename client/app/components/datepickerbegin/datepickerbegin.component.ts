import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgModel, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-datepickerbegin',
  templateUrl: './datepickerbegin.component.html',
  styleUrls: ['./datepickerbegin.component.css']
})
export class DatepickerbeginComponent implements OnInit {
maxDate: Date;
minDate: Date;
public date: Date;
public myGroup;
public myForm: FormGroup;


onDateSelected() {
console.log(this.date);
}

onSubmit() {
console.log(this.myForm.value);

}

constructor(private _fb: FormBuilder) {
this.maxDate = new Date();
this.maxDate.setDate(this.maxDate.getDate());
this.minDate=new Date();
this.minDate.setDate(this.minDate.getDate()-60);
}

ngOnInit() {

this.myForm = this._fb.group({
myDate: ['', <any>Validators.required]
});

}

} 