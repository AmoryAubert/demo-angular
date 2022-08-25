import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterModule, Routes } from '@angular/router';

import { DemoRoutingModule } from './demo-routing.module';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { DemoDialogueComponent } from './demo-dialogue/demo-dialogue.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { HelloAngularComponent } from './hello-angular/hello-angular.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnfantDialogueComponent } from './demo-dialogue/enfant-dialogue/enfant-dialogue.component';
import { TemperaturePipe } from '../pipes/temperature.pipe';
import { DemoPipePipe } from '../pipes/demo-pipe.pipe';
import { DemoParamsComponent } from './demo-params/demo-params.component';
import { UsersComponent } from './demo-params/users/users.component';

//const demosRoutes: Routes = [{ path: 'hello' }];

@NgModule({
  declarations: [
    DemoDialogueComponent,
    DemoDirectiveComponent,
    EnfantDialogueComponent,
    HelloAngularComponent,
    ReactiveFormComponent,
    DemoPipeComponent,
    HighlightDirective,
    TemperaturePipe,
    DemoPipePipe,
    DemoParamsComponent,
    UsersComponent,
  ],
  imports: [CommonModule, DemoRoutingModule, FormsModule, ReactiveFormsModule],
})
export class DemoModule {}
