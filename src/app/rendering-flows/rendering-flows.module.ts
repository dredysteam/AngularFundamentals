import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//containers

import { NgIfComponent } from './containers/ng-if/ng-if.component';
import { NgForComponent } from './containers/ng-for/ng-for.component';
import { NgClassComponent } from './containers/ng-class/ng-class.component';
import { NgStyleComponent } from './containers/ng-style/ng-style.component';
import { PipesComponent } from './containers/pipes/pipes.component';
import { SafeNavigationComponent } from './containers/safe-navigation/safe-navigation.component';

@NgModule({
  declarations: [
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    PipesComponent,
    SafeNavigationComponent,
  ],
  imports: [CommonModule],
  exports: [
    NgIfComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    PipesComponent,
    SafeNavigationComponent,
  ],
})
export class RenderingFlowsModule {}
