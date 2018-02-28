import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Nota } from './shared/models/nota.model';
import { NotaService } from './services/nota-service.service';
import { ValorComponent } from './components/valor/valor.component';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewChecked {
  printValue: string;
  valor = ValorComponent;
  test = ' ';

  dispNumber = '';
  envelopeNumb(eNumber: string) {
    this.dispNumber = eNumber;
  }

  recievingValue(message: string) {
    this.test = message;
  }

  constructor(public auth: AuthService,

              private changeDetector: ChangeDetectorRef
            , private notaService: NotaService) { }
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

  handleInputChange(event){
    let response;
    let nota: Nota = new Nota;
    nota.image = btoa(event.target.files[0]);
    console.log(nota.image);

    response = this.notaService.envia_nota(nota);
  }

  onDateSend(message: string) {
    this.printValue = message;
  }
}
