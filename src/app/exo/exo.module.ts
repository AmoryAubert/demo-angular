import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ChronoComponent } from './chrono/chrono.component';
import { ExoContactFormComponent } from './exo-contact-form/exo-contact-form.component';
import { ExoDialogueComponent } from './exo-dialogue/exo-dialogue.component';
import { CoursComponent } from './exo-directives/cours/cours.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeComponent } from './exo-dialogue/liste/liste.component';

@NgModule({
  declarations: [
    ChronoComponent,
    ExoContactFormComponent,
    ExoDialogueComponent,
    ListeComponent,
    CoursComponent,
    ShoppingComponent,
  ],
  imports: [CommonModule, ExoRoutingModule, FormsModule, ReactiveFormsModule],
})
export class ExoModule {}
