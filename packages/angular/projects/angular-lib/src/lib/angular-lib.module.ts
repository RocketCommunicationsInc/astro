import { NgModule } from '@angular/core';
import { DIRECTIVES } from '../directives/proxies-list';

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class AstroModule {}
