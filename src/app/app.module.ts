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
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './custom-directives/highlight.directive';
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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
