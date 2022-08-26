import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { DemoDialogueComponent } from './demo-dialogue/demo-dialogue.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { DemoHttpComponent } from './demo-http/demo-http.component';
import { UserDetailComponent } from './demo-http/user-detail/user-detail.component';
import { DemoParamsComponent } from './demo-params/demo-params.component';
import { UsersComponent } from './demo-params/users/users.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { HelloAngularComponent } from './hello-angular/hello-angular.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'demo-dialogue', component: DemoDialogueComponent },
  { path: 'demo-directive', component: DemoDirectiveComponent },
  { path: 'hello', component: HelloAngularComponent },
  { path: 'demo-pipe', component: DemoPipeComponent },
  { path: 'form', component: ReactiveFormComponent },
  { path: 'custom-directives', component: HighlightDirective },
  {
    path: 'params',
    component: DemoParamsComponent,
    children: [{ path: ':id', component: UsersComponent }],
  },
  {
    path: 'demo-http',
    component: DemoHttpComponent,
    children: [{ path: ':id', component: UserDetailComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoRoutingModule {}
