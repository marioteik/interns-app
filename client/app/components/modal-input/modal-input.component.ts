import { Component, OnInit, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-modal-input',
  templateUrl: './modal-input.component.html',
  styleUrls: ['./modal-input.component.css']
})
export class ModalInputComponent implements OnInit {
  showPopover = false;
  @Output()
  quantitySend: EventEmitter<any> = new EventEmitter<any>();
  displayValue(value: String) {
    this.quantitySend.emit(`Quantidade: ${value}`);
    this.showPopover = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
