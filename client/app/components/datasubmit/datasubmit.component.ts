import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datasubmit',
  templateUrl: './datasubmit.component.html',
  styleUrls: ['./datasubmit.component.css']
})
export class DatasubmitComponent implements OnInit {
  // minDate: Date;
  maxDate: Date;
  
  constructor() {
    // this.minDate = new Date();
    this.maxDate = new Date();
    // this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate());
   }

  ngOnInit() {
  }

}
