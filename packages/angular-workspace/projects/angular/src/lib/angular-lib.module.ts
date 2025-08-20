import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIRECTIVES } from '../directives/proxies-list';
import { BooleanValueAccessor } from '../directives/boolean-value-accessor';
import { NumericValueAccessor } from '../directives/number-value-accessor';
import { RadioValueAccessor } from '../directives/radio-value-accessor';
import { SelectValueAccessor } from '../directives/select-value-accessor';
import { TextValueAccessor } from '../directives/text-value-accessor';
import { defineCustomElements } from '@astrouxds/astro-web-components/loader';

defineCustomElements(window);

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
  providers: [],
})
export class AstroComponentsModule {}
