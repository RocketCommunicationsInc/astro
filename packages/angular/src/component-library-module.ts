import { NgModule } from "@angular/core";
import { defineCustomElements } from "@astrouxds/astro-web-components/loader";
import { TextValueAccessor } from "./directives/text-value-accessor";
import { BooleanValueAccessor } from "./directives/boolean-value-accessor";
import { DIRECTIVES } from "./directives/proxies-list";

const DECLARATIONS = [
  // proxies
  TextValueAccessor,
  BooleanValueAccessor,

  ...DIRECTIVES
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class AstroComponentsModule {
  constructor() {
    defineCustomElements(window);
  }
}
