import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//features modules
import { RenderingFlowsModule } from './rendering-flows/rendering-flows.module';
import { TemplateFundamentalsModule } from './template-fundamentals/template-fundamentals.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //features modules
    TemplateFundamentalsModule,
    RenderingFlowsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
