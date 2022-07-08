import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AstroComponentsModule } from '@astrouxds/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AstroComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
