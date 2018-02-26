import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-envelope',
  templateUrl: './envelope.component.html',
  styleUrls: ['./envelope.component.css']
})
export class EnvelopeComponent implements OnInit {
  @Output () numberEnvelope: EventEmitter <any> = new EventEmitter<any>() ;
  NumberEnv (Envelope:string):void {
    this.numberEnvelope.emit (`Envelope: ${Envelope}`);
  }

  constructor() { }

  ngOnInit() {
  }

}
