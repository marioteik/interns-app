import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EnvelopeComponent } from './components/envelope/envelope.component';
import { ModalinputComponent } from './components/modalinput/modalinput.component';
import { PopoverModule } from 'ngx-bootstrap';
import { DatasubmitComponent } from './components/datasubmit/datasubmit.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { DatepickerbeginComponent } from './component/datepickerbegin/datepickerbegin.component';
import { NavMyteComponent } from './component/nav-myte/nav-myte.component';

import { BsDropdownModule } from 'ngx-bootstrap';
import { StartExpenseComponent } from './components/start-expense/start-expense.component';
import { AppRoutingModule } from './/app-routing.module';
import { WexpenseComponent } from './components/wexpense/wexpense.component';
import { WbsComponent } from './components/wbs/wbs.component';
import { ModalInputComponent } from './components/modal-input/modal-input.component';
import { PersonAutocompleteComponent } from './components/person-autocomplete/person-autocomplete.component';

// imports para filtro
import { FormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe} from './filter.pipe';

import { SelectTypeComponent } from './select-type-component/select-type.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    EnvelopeComponent
    ModalinputComponent,
    DatasubmitComponent
    DatepickerbeginComponent
    NavMyteComponent
    StartExpenseComponent
    WexpenseComponent
    WbsComponent,
    ModalInputComponent
    PersonAutocompleteComponent,
    FilterPipe
    SelectTypeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RoutingModule,
    BsDatepickerModule.forRoot(),
    SharedModule,
    PopoverModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // whitelistedDomains: ['localhost:3000', 'localhost:4200']
      }
    })
    
    }),
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }


