import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepickerbegin',
  templateUrl: './datepickerbegin.component.html',
  styleUrls: ['./datepickerbegin.component.css']
})
export class DatepickerbeginComponent implements OnInit {
  minDate: Date;
  divToChange=document.getElementById('form-control');
  onDateSelected() {
    return "#e5e5e5";
  }
  
  constructor() { 
    this.minDate= new Date();
    this.minDate.setDate(this.minDate.getDate() -60);
  }

  ngOnInit() {
  }

}

