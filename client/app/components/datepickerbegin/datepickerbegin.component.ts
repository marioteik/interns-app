import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-datepickerbegin',
  templateUrl: './datepickerbegin.component.html',
  styleUrls: ['./datepickerbegin.component.css']
})
export class DatepickerbeginComponent implements OnInit {
  minDate: Date;
  maxDate: Date;
  divToChange=document.getElementById('form-control');
  onDateSelected() {
    return "#e5e5e5";
  }
  @Output() dateSend: EventEmitter<any> = new EventEmitter<any>();

  onDateInput(valueEmited:string) {
    this.dateSend.emit(valueEmited);
  }
  constructor() { 
    this.minDate= new Date();
    this.minDate.setDate(this.minDate.getDate() -60);
    this.maxDate= new Date();
    this.maxDate.setDate(this.minDate.getDate()-2);
  }

  ngOnInit() {
  }

}

