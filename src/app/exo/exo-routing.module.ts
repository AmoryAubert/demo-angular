import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronoComponent } from './chrono/chrono.component';
import { ExoContactFormComponent } from './exo-contact-form/exo-contact-form.component';
import { ExoDialogueComponent } from './exo-dialogue/exo-dialogue.component';
import { CoursComponent } from './exo-directives/cours/cours.component';
import { LoginComponent } from './login/login.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  { path: 'chrono', component: ChronoComponent },
  { path: 'exo-form', component: ExoContactFormComponent },
  { path: 'exo-dialogue', component: ExoDialogueComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExoRoutingModule {}
