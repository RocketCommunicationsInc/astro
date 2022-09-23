import { NgModule } from '@angular/core';
import { DIRECTIVES } from '../directives/proxies-list';
import { BooleanValueAccessor } from '../directives/boolean-value-accessor';
import { NumericValueAccessor } from '../directives/number-value-accessor';
import { RadioValueAccessor } from '../directives/radio-value-accessor';
import { SelectValueAccessor } from '../directives/select-value-accessor';
import { TextValueAccessor } from '../directives/text-value-accessor';
import { defineCustomElements } from '@astrouxds/astro-web-components/loader';

defineCustomElements(window);

const DECLARATIONS = [
  ...DIRECTIVES,
  BooleanValueAccessor,
  NumericValueAccessor,
  RadioValueAccessor,
  SelectValueAccessor,
  TextValueAccessor,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class AstroComponentsModule {}
