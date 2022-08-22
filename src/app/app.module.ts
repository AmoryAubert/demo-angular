import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloAngularComponent } from './hello-angular/hello-angular.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WhoComponent } from './who/who.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { DemoPipePipe } from './pipes/demo-pipe.pipe';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { ChronoComponent } from './chrono/chrono.component';
import { ChronoPipe } from './pipes/chrono.pipe';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { CoursComponent } from './exo-directives/cours/cours.component';
import { DemoDialogueComponent } from './demo-dialogue/demo-dialogue.component';
import { EnfantDialogueComponent } from './demo-dialogue/enfant-dialogue/enfant-dialogue.component';
import { ExoDialogueComponent } from './exo-dialogue/exo-dialogue.component';
import { ListeComponent } from './exo-dialogue/liste/liste.component';
import { ShoppingComponent } from './shopping/shopping.component';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HelloAngularComponent,
    AboutComponent,
    ContactComponent,
    WhoComponent,
    DemoPipeComponent,
    DemoPipePipe,
    TemperaturePipe,
    ChronoComponent,
    ChronoPipe,
    DemoDirectiveComponent,
    HighlightDirective,
    CoursComponent,
    DemoDialogueComponent,
    EnfantDialogueComponent,
    ExoDialogueComponent,
    ListeComponent,
    ShoppingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
