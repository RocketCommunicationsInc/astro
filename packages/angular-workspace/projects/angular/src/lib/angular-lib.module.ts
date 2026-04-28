import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooleanValueAccessor } from '../directives/boolean-value-accessor';
import { NumericValueAccessor } from '../directives/number-value-accessor';
import { TextValueAccessor } from '../directives/text-value-accessor';
import { defineCustomElements } from '@astrouxds/astro-web-components/loader';

defineCustomElements(window);

const VALUE_ACCESSORS = [BooleanValueAccessor, NumericValueAccessor, TextValueAccessor];

@NgModule({
  declarations: [...VALUE_ACCESSORS],
  imports: [CommonModule],
  exports: [...VALUE_ACCESSORS],
  providers: [],
})
export class AstroComponentsModule {}
