import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ValorComponent } from './components/valor/valor.component';
import { NgModel } from '@angular/forms';
import { ServiceTestService } from './service-test.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {

  valor = ValorComponent;
  
  test = ' ';
  recievingValue(message: string){
    this.test = message;
  }

  constructor(public auth: AuthService,
              private changeDetector: ChangeDetectorRef,
              private ServiceTest: ServiceTestService
             ) { }

  // This fixes: https://github.com/DavideViolante/Angular-Full-Stack/issues/105
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

}
