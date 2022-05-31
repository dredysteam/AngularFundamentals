import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//features modules
import { RenderingFlowsModule } from './rendering-flows/rendering-flows.module';
import { TemplateFundamentalsModule } from './template-fundamentals/template-fundamentals.module';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //features modules
    TemplateFundamentalsModule,
    RenderingFlowsModule,
    PassengerDashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
