import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChronoComponent } from './chrono/chrono.component';
import { ContactComponent } from './contact/contact.component';
import { DemoDialogueComponent } from './demo-dialogue/demo-dialogue.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { CoursComponent } from './exo-directives/cours/cours.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { WhoComponent } from './who/who.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: 'contact',
    component: ContactComponent,
    children: [{ path: 'who', component: WhoComponent }],
  },
  { path: 'demopipe', component: DemoPipeComponent },
  { path: 'chrono', component: ChronoComponent },
  { path: 'exo-directives/cours', component: CoursComponent },
  { path: 'demodialogue', component: DemoDialogueComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
