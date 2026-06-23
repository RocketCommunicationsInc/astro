import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';

/**
 * Standalone Angular 20 import pattern test.
 *
 * AstroComponentsModule is imported directly in this component (not via AppModule),
 * demonstrating the standalone import pattern. No AppModule involvement.
 *
 * The value accessor directives (BooleanValueAccessor, TextValueAccessor,
 * NumericValueAccessor) are standalone directives — once the library is built,
 * they can be imported individually instead of via AstroComponentsModule:
 *
 *   import { BooleanValueAccessor, TextValueAccessor, NumericValueAccessor } from '@astrouxds/angular';
 */
import {
  RuxButton,
  RuxCheckbox,
  RuxContainer,
  RuxInput,
  RuxOption,
  RuxRadio,
  RuxRadioGroup,
  RuxSelect,
  RuxSwitch,
  RuxTextarea,
} from '@astrouxds/angular';

@Component({
  standalone: true,
  selector: 'app-standalone-astro',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RuxContainer,
    RuxInput,
    RuxTextarea,
    RuxSelect,
    RuxOption,
    RuxRadioGroup,
    RuxRadio,
    RuxCheckbox,
    RuxSwitch,
    RuxButton,
  ],
  template: `
    <rux-container>
      <header slot="header">
        Standalone Astro — Direct Imports (<code>standalone: true</code>)
      </header>

      <form
        [formGroup]="form"
        (ngSubmit)="onSubmit()"
        style="display: flex; flex-direction: column; gap: 1rem; padding: 1rem;"
      >
        <rux-input
          label="Text input"
          formControlName="textInput3"
          placeholder="Type something..."
        ></rux-input>

        <rux-input
          label="Number input"
          type="number"
          formControlName="numberInput3"
          placeholder="0"
        ></rux-input>

        <rux-textarea
          label="Textarea"
          formControlName="textArea3"
          placeholder="Type something..."
        ></rux-textarea>

        <rux-select label="Select" formControlName="selectValue3">
          <rux-option value="" label="-- choose --"></rux-option>
          <rux-option value="a" label="Option A"></rux-option>
          <rux-option value="b" label="Option B"></rux-option>
          <rux-option value="c" label="Option C"></rux-option>
        </rux-select>

        <rux-radio-group label="Radio group" formControlName="radioGroup3">
          <rux-radio value="one">One</rux-radio>
          <rux-radio value="two">Two</rux-radio>
          <rux-radio value="three">Three</rux-radio>
        </rux-radio-group>

        <rux-checkbox formControlName="checkboxValue3">Checkbox</rux-checkbox>

        <rux-switch formControlName="switchValue3">Switch</rux-switch>

        <rux-input
          label="ngModel text input"
          [(ngModel)]="ngModelText"
          [ngModelOptions]="{ standalone: true }"
          placeholder="Type something..."
        ></rux-input>
        <p style="color: var(--color-text-primary, white);">
          ngModel value: <strong>{{ ngModelText }}</strong>
        </p>

        <rux-button type="submit">Submit</rux-button>
      </form>

      <pre
        style="color: var(--color-text-primary, white); padding: 1rem; font-size: 0.8rem;"
        >{{ formValues }}</pre
      >
    </rux-container>
  `,
})
export class StandaloneAstroComponent {
  form = new FormGroup({
    textInput3: new FormControl(''),
    numberInput3: new FormControl<number | null>(null),
    textArea3: new FormControl(''),
    selectValue3: new FormControl(''),
    radioGroup3: new FormControl(''),
    checkboxValue3: new FormControl(false),
    switchValue3: new FormControl(false),
  });

  ngModelText = '';

  get formValues(): string {
    return JSON.stringify(this.form.value, null, 2);
  }

  onSubmit() {
    alert(this.formValues);
  }
}
