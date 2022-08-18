import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChronoComponent } from './chrono/chrono.component';
import { ContactComponent } from './contact/contact.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
