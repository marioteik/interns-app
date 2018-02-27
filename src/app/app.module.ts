import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BotaoDeEnvioComponent } from './components/botao-de-envio/botao-de-envio.component';


@NgModule({
  declarations: [
    AppComponent,
    BotaoDeEnvioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
