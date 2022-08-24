import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { DemoDialogueComponent } from './demo-dialogue/demo-dialogue.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { HelloAngularComponent } from './hello-angular/hello-angular.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'demo-dialogue', component: DemoDialogueComponent },
  { path: 'demo-directive', component: DemoDirectiveComponent },
  { path: 'Hello', component: HelloAngularComponent },
  { path: 'demo-pipe', component: DemoPipeComponent },
  { path: 'form', component: ReactiveFormComponent },
  { path: 'custom-directive', component: HighlightDirective },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
