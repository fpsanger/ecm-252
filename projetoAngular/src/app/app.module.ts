import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularDiretivasComponent } from './angular-diretivas/angular-diretivas.component';

@NgModule({
  declarations: [AppComponent, AngularDiretivasComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
