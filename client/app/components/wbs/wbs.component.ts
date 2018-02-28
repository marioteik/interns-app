import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Wbss } from '../../wbs-class';
import { WBS } from '../../mock-wbs';
import { NgModel } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectChange } from '@angular/material/select';



@Component({
  selector: 'app-wbs',
  templateUrl: './wbs.component.html',
  styleUrls: ['./wbs.component.css']
})
export class WbsComponent implements OnInit {
  wbsss = WBS;
  selectedWbs: Wbss;
  @Output()
  selectionChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

  sendWBS(wbs: Wbss) {
    this.selectedWbs = wbs;
    this.selectionChange.emit(`Wbs: ${this.selectedWbs}`);
  }
  ngOnInit() {
  }

}
