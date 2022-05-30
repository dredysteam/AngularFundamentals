import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InterpolationComponent } from './containers/interpolation/interpolation.component';
import { PropertyBindingComponent } from './containers/property-binding/property-binding.component';
import { EventBindingComponent } from './containers/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './containers/two-way-binding/two-way-binding.component';
import { TemplateRefComponent } from './containers/template-ref/template-ref.component';

@NgModule({
  declarations: [
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    TemplateRefComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    TemplateRefComponent,
  ],
})
export class TemplateFundamentalsModule {}
