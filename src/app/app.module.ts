import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';
import { MarcaTextoDirective } from './directives/marca-texto.directive';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    MarcaTextoDirective
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
