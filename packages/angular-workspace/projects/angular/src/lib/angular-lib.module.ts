import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIRECTIVES } from '../directives/proxies-list';
import { TextValueAccessor } from '../directives/text-value-accessor';
import { BooleanValueAccessor } from '../directives/boolean-value-accessor';

@NgModule({
  imports: [CommonModule, ...DIRECTIVES],
  exports: [...DIRECTIVES,],
  providers: [],
})
export class AstroComponentsModule {}
