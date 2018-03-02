import { Component, OnInit } from '@angular/core';
import { Wbss } from '../../wbs-class';
import { WBS } from '../../mock-wbs';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-wbs',
  templateUrl: './wbs.component.html',
  styleUrls: ['./wbs.component.css']
})
export class WbsComponent implements OnInit {
wbsss = WBS;

  constructor() { }

  ngOnInit() {
  }

}
