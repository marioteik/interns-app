import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ValorComponent } from './components/valor/valor.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewChecked {
  dispNumber = '';
  envelopeNumb (eNumber: string) {
    this.dispNumber = eNumber;
  }

  valor = ValorComponent;
  
  test = ' ';
  recievingValue(message: string){
    this.test = message;
  }

  constructor(public auth: AuthService,
              private changeDetector: ChangeDetectorRef) { }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }
}
