import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker-end',
  templateUrl: './date-picker-end.component.html',
  styleUrls: ['./date-picker-end.component.css']
})
export class DatePickerEndComponent implements OnInit {
  maxDate: Date;
  divToChange = document.getElementById('form-control');
  onDateSelected() {
    return "#e5e5e5";
  }


  constructor() {
    this.maxDate= new Date();
    this.maxDate.setDate(this.maxDate.getDate());
   }

  ngOnInit() {
  }
}
