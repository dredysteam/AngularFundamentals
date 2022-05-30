import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateFundamentalsModule } from './template-fundamentals/template-fundamentals.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //features modules
    TemplateFundamentalsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
