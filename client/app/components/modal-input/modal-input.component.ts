import { Component, OnInit, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-modal-input',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.css']
})
export class ModalInputComponent implements OnInit {
  showPopover = false;
  data1: string[] = ['0'];
  public value: number;

  @Output()
  quantitySend: EventEmitter<any> = new EventEmitter<any>();
  displayValue(value: string) {
    this.data1.push(value);
    this.quantitySend.emit(`Quantidade: ${this.data1.reduce((obj, x) => `${obj}, ${x}`, `0`)}`);
    this.quantitySend.emit(`Quantidade: ${this.data1.reduce((obj, x) => obj + parseInt(x, 10), 0)}`);
    this.showPopover = false;
    console.log(value);
  }

  constructor() { }
  ngOnInit() {
  }
}
