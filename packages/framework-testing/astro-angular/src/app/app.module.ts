import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AstroComponentsModule } from '@astrouxds/angular';

import { AppComponent } from './app.component';
import { StandaloneFormComponent } from './standalone-form.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AstroComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    StandaloneFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
