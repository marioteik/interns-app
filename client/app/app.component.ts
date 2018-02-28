import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Nota } from './shared/models/nota.model';
import { NotaService } from './services/nota-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewChecked {

  constructor(public auth: AuthService,
              private changeDetector: ChangeDetectorRef
            , private notaService: NotaService) { }

  // This fixes: https://github.com/DavideViolante/Angular-Full-Stack/issues/105
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

  handleInputChange(event){
    let response;
    let nota: Nota = new Nota;
    console.log("carregando imagem...");
    nota.image = btoa(event.target.files[0]);
    console.log(nota.image);
    console.log("imagem carregada")
    response = this.notaService.envia_nota(nota);
  }

}
